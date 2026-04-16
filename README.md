# Portafolio After College

Sitio personal construido con Astro y Tailwind CSS.

## Requisitos

- Node.js 20 o superior
- npm 9 o superior

## Instalacion

1. Clona el repositorio.
2. Entra a la carpeta del proyecto.
3. Instala dependencias:

```bash
npm install
```

## Desarrollo local

Levanta el servidor de desarrollo:

```bash
npm run dev
```

Abre en el navegador:

```text
http://localhost:4321
```

## Build de produccion

Genera la version optimizada:

```bash
npm run build
```

Previsualiza el build localmente:

```bash
npm run preview
```

## Scripts disponibles

- `npm run dev`: inicia servidor local.
- `npm run build`: compila el sitio a `dist`.
- `npm run preview`: sirve el build generado.
- `npm run astro`: ejecuta comandos de Astro CLI.

## Deploy con Docker y Cloudflare Pages

Este proyecto incluye un Dockerfile de dos etapas:

1. Compila el sitio con Node.
2. Publica `dist` en Cloudflare Pages usando Wrangler.

### 1) Construir imagen

```bash
docker build -t portafolio-cloudflare .
```

### 2) Ejecutar deploy

```bash
docker run --rm \
	-e CLOUDFLARE_API_TOKEN=tu_token \
	-e CF_PAGES_PROJECT=portafolio \
	portafolio-cloudflare
```

Variables:

- `CLOUDFLARE_API_TOKEN`: token de API con permisos para Pages.
- `CF_PAGES_PROJECT`: nombre del proyecto en Cloudflare Pages.

## Estructura principal

```text
src/
	components/
	data/
	layouts/
	pages/
public/
```
