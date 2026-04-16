# ─── Stage 1: Build ───────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ─── Stage 2: Deploy to Cloudflare Pages ──────────────────────────────────────
FROM node:20-alpine AS deployer

WORKDIR /app

# Instala Wrangler globalmente
RUN npm install -g wrangler

# Copia solo los archivos estáticos generados
COPY --from=builder /app/dist ./dist

# Variables requeridas en tiempo de ejecución:
#   CLOUDFLARE_API_TOKEN  → token de API de Cloudflare
#   CF_PAGES_PROJECT      → nombre del proyecto en Cloudflare Pages (default: portafolio)
ENV CF_PAGES_PROJECT=portafolio

CMD ["sh", "-c", "wrangler pages deploy dist --project-name=${CF_PAGES_PROJECT}"]
