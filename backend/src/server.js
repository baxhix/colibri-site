const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const store = require('./content-store');

const app = express();
const PORT = Number(process.env.PORT || 3000);
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || '';

function parseAllowedOrigins(value) {
  return String(value || '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

const allowedOrigins = parseAllowedOrigins(process.env.CORS_ORIGINS);

app.use(helmet());
app.use(express.json({ limit: '20mb' }));
app.use(
  cors({
    origin(origin, callback) {
      if (!origin) return callback(null, true);
      if (!allowedOrigins.length || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error('CORS origin not allowed'));
    },
  })
);

app.get('/health', async (req, res) => {
  res.json({ ok: true, service: 'colibri-api' });
});

app.get('/api/content/site-content', async (req, res) => {
  try {
    const content = await store.getContent();
    res.json(content || {});
  } catch (error) {
    res.status(500).json({ error: 'failed_to_read_content' });
  }
});

app.put('/api/content/site-content', async (req, res) => {
  try {
    const incomingToken = req.headers['x-admin-token'] || '';
    if (!ADMIN_TOKEN || String(incomingToken) !== ADMIN_TOKEN) {
      return res.status(401).json({ error: 'unauthorized' });
    }
    await store.setContent(req.body || {});
    return res.json({ ok: true });
  } catch (error) {
    return res.status(500).json({ error: 'failed_to_write_content' });
  }
});

async function start() {
  await store.ensureSchema();
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log('colibri-api running on port', PORT);
  });
}

start().catch((error) => {
  // eslint-disable-next-line no-console
  console.error(error);
  process.exit(1);
});
