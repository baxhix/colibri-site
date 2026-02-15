const fs = require('fs');
const path = require('path');
const db = require('./db');

const DEFAULT_CONTENT_PATH = path.resolve(__dirname, '../../data/site-content.json');

function loadDefaultContent() {
  try {
    const filePath = process.env.DEFAULT_CONTENT_FILE
      ? path.resolve(process.env.DEFAULT_CONTENT_FILE)
      : DEFAULT_CONTENT_PATH;
    const raw = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(raw);
  } catch (error) {
    return {};
  }
}

async function ensureSchema() {
  await db.query(`
    CREATE TABLE IF NOT EXISTS cms_content (
      id BOOLEAN PRIMARY KEY DEFAULT TRUE,
      content JSONB NOT NULL,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);

  const current = await db.query('SELECT id FROM cms_content WHERE id = TRUE LIMIT 1');
  if (current.rowCount === 0) {
    await db.query(
      'INSERT INTO cms_content (id, content) VALUES (TRUE, $1::jsonb)',
      [JSON.stringify(loadDefaultContent())]
    );
  }
}

async function getContent() {
  const result = await db.query('SELECT content FROM cms_content WHERE id = TRUE LIMIT 1');
  if (!result.rowCount) return {};
  return result.rows[0].content || {};
}

async function setContent(content) {
  await db.query(
    `
      INSERT INTO cms_content (id, content, updated_at)
      VALUES (TRUE, $1::jsonb, NOW())
      ON CONFLICT (id)
      DO UPDATE SET content = EXCLUDED.content, updated_at = NOW()
    `,
    [JSON.stringify(content || {})]
  );
}

module.exports = {
  ensureSchema,
  getContent,
  setContent,
};
