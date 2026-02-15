# CMS Integration (Frontend Ready)

## O que já está pronto
- Camada de conteúdo dinâmica via `cms-bridge.js`.
- Configuração da fonte de dados em `cms-config.js`.
- Exemplo de payload em `data/site-content.json`.
- Páginas já preparadas:
  - Home (`index.html`)
  - Produtos (`produtos.html`)
  - Detalhe do produto (`produto.html`)
  - Header/Footer globais

## Como o frontend lê os dados
1. Lê `window.COLIBRI_CMS_CONFIG.endpoint` (atual: `./data/site-content.json`).
2. Tenta carregar JSON remoto.
3. Aplica conteúdo nos componentes da página.
4. Dispara evento global: `colibri:content-ready`.

## Preview sem backend (admin preview)
Você pode injetar conteúdo no navegador via LocalStorage:
- chave: `colibri.cms.preview`
- valor: JSON string com o mesmo contrato de `data/site-content.json`

## Contrato base
Arquivo de referência: `data/site-content.json`

Blocos principais:
- `navigation`
- `home`
- `catalog`
- `productDetail`
- `footer`

## Próximo passo para integração com painel admin
- Fazer o painel publicar esse JSON em um endpoint autenticado.
- Atualizar `cms-config.js` com a URL real da API do admin.
- Opcional: versionamento de conteúdo por ambiente (draft/published).
