# Publicação em Produção (Vercel + Hostinger VPS)

Este projeto está preparado para:

- Frontend estático na `Vercel`
- API + Banco `PostgreSQL` na `VPS Hostinger`

## 1) Publicar o frontend na Vercel

1. Suba este repositório no GitHub.
2. Na Vercel, clique em `Add New Project` e conecte o repositório.
3. Em `Framework Preset`, deixe `Other`.
4. Em `Build & Output`:
   - `Build Command`: vazio
   - `Output Directory`: vazio (raiz do projeto)
5. Deploy.

Rotas amigáveis já estão configuradas em `vercel.json`:

- `/` -> `index.html`
- `/produtos` -> `produtos.html`
- `/sobre` -> `sobre.html`
- `/contato` -> `contato.html`
- `/blog` -> `blog.html`
- `/post` -> `post.html`
- `/admin` -> `admin.html`

## 2) Preparar a VPS Hostinger

Na VPS, instale Docker + Docker Compose plugin (uma vez):

```bash
sudo apt update
sudo apt install -y docker.io docker-compose-plugin
sudo usermod -aG docker $USER
```

Reinicie a sessão SSH após adicionar o usuário ao grupo `docker`.

## 3) Subir API + PostgreSQL + Nginx na VPS

1. Clone o projeto na VPS.
2. Entre em `infra/hostinger`.
3. Copie o arquivo de ambiente:

```bash
cp .env.example .env
```

4. Edite `.env` com valores fortes:
   - `POSTGRES_PASSWORD`
   - `ADMIN_TOKEN`
   - `CORS_ORIGINS` (domínio final da Vercel/custom domain)

5. Edite `infra/hostinger/nginx.conf` e troque:
   - `api.seudominio.com` pelo seu subdomínio real de API.

6. Suba os containers:

```bash
docker compose up -d --build
docker compose ps
```

7. Teste saúde da API:

```bash
curl http://SEU_IP_DA_VPS/health
```

## 4) Configurar DNS

No seu DNS:

- `www.seudominio.com` -> Vercel
- `seudominio.com` -> Vercel
- `api.seudominio.com` -> IP da VPS

Após propagação, o frontend tentará consumir automaticamente:

`https://api.seudominio.com/api/content/site-content`

Se a API estiver indisponível, o frontend mantém fallback local em `data/site-content.json`.

## 5) SSL (recomendado antes de go-live)

Opções:

- Usar proxy/CDN com TLS (ex.: Cloudflare).
- Ou configurar HTTPS no servidor (Nginx + Certbot).

## 6) Publicar conteúdo pela API (quando quiser sair do localStorage)

Endpoint pronto:

- `GET /api/content/site-content`
- `PUT /api/content/site-content` (header `x-admin-token`)

Exemplo:

```bash
curl -X PUT http://api.seudominio.com/api/content/site-content \
  -H "Content-Type: application/json" \
  -H "x-admin-token: SEU_ADMIN_TOKEN" \
  --data-binary @data/site-content.json
```

## 7) Checklist final

- `robots.txt` acessível
- `sitemap.xml` acessível
- páginas com `canonical`, `description`, `og:*`, `twitter:*`
- painel admin com `noindex`
- GA/Pixel configurados em `Admin -> SEO e Tags`
