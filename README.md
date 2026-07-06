# CV · AzanoRivers

<p align="center">
  <img src="https://img.shields.io/badge/Astro-7-BC52EE?style=for-the-badge&logo=astro&logoColor=white" alt="Astro 7" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19 (build-time only)" />
  <img src="https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white" alt="pnpm" />
  <img src="https://img.shields.io/badge/Cloudflare_R2-F38020?style=for-the-badge&logo=cloudflare&logoColor=white" alt="Cloudflare R2" />
</p>

<p align="center">
  <a href="#español">Español</a> · <a href="#english">English</a>
</p>

---

## English

Personal CV / portfolio site for **Andrés Rivera (AzanoRivers)** — a full-stack developer. Single-page, statically generated, with a cyberpunk/blueprint visual identity shared with the rest of the AzanoLabs/AzanoRivers ecosystem.

### How it works

- **100% static output, zero client-side framework.** Astro renders every page at build time. React is a dependency (`@astrojs/react`), but it's used **only at build time** to author icon components (`lucide-react`, `react-icons`) as JSX inside `.astro` files — no React runtime is ever shipped to the browser. All interactivity (scroll reveals, the experience timeline, the certifications carousel, the language switcher) is written in plain, vanilla `<script>` blocks.
- **Client-side i18n, no duplicated routes.** Spanish and English live in one page. A small client script (`src/i18n/client.ts`) swaps `data-i18n` text nodes on the fly based on browser language or a manual toggle — no `/en/` routes, no `astro:i18n`.
- **Section-by-section layout**, each an isolated Astro "organism" component with its own scoped CSS and (when needed) its own `<script>`:
  - **Banner** — hero, photo, animated stats, CTAs.
  - **About** — short bio and focus areas.
  - **Tech Stack** — grouped technologies by domain (frontend, backend, databases, mobile, gaming, IoT).
  - **Experience** — an interactive, horizontally-scrollable timeline (native scroll + drag support) built entirely with CSS positioning, no canvas/WebGL.
  - **Certifications** — an infinite-loop thumbnail strip that opens into a 3D coverflow lightbox, driven by a continuous velocity/friction physics loop (`requestAnimationFrame`) instead of discrete CSS transitions, tuned for low-end mobile performance. Certificate images are hosted on a public Cloudflare R2 bucket.
  - **Education** — formal studies alongside self-taught and continuous learning.
  - **Contact** — social links, plus an email-reveal widget gated behind a small math captcha (digits rendered on `<canvas>`, not as selectable/scrapable text) as lightweight anti-spam friction.
  - **Footer** — a neon-glitch signature link, ported from the AzanoLabs design system.
- **iOS Safari compatibility is treated as a first-class concern**: every `backdrop-filter`, animated `clip-path`, and `user-select` declaration is explicitly vendor-prefixed (`-webkit-`) by hand, since this project's build pipeline does not autoprefix custom CSS.
- **No inline styles.** All visual state lives in CSS classes/modifiers; the only exception allowed is CSS custom properties computed at runtime for genuinely dynamic values.

### Project structure

```
src/
├── assets/          # optimized local images (astro:assets)
├── components/
│   ├── atoms/       # smallest building blocks (boot intro, floating leaves, badges)
│   ├── molecules/   # small composed pieces (cards, language selector, email reveal)
│   └── organisms/   # full page sections (Banner, ExperienceSection, etc.)
├── i18n/            # es/en dictionaries + client-side language switcher
├── layouts/         # BaseLayout (head, boot sequence, global scripts)
├── pages/           # index.astro — the single page
└── styles/          # global tokens (colors, fonts, base resets)
```

### Development

```sh
pnpm install
pnpm dev             # local dev server
pnpm astro check     # type/Astro diagnostics
pnpm build           # production build (also the only way to catch CSS syntax errors)
pnpm preview         # preview the production build locally
```

---

## Español

Sitio de CV / portafolio personal de **Andrés Rivera (AzanoRivers)**, desarrollador full stack. Página única, generada 100% estática, con la línea gráfica cyberpunk/blueprint que comparte con el resto del ecosistema AzanoLabs/AzanoRivers.

### Cómo funciona

- **Salida 100% estática, sin framework en el cliente.** Astro renderiza todo en tiempo de build. React es una dependencia (`@astrojs/react`), pero se usa **solo en build** para escribir componentes de íconos (`lucide-react`, `react-icons`) como JSX dentro de archivos `.astro`; ningún runtime de React llega al navegador. Toda la interactividad (reveals por scroll, la línea de tiempo de experiencia, el carrusel de certificaciones, el selector de idioma) está escrita en `<script>` vanilla, sin ningún framework.
- **i18n del lado del cliente, sin rutas duplicadas.** Español e inglés conviven en una sola página. Un script chico (`src/i18n/client.ts`) intercambia los textos marcados con `data-i18n` según el idioma del navegador o un toggle manual — nada de rutas `/en/` ni `astro:i18n`.
- **Layout por secciones**, cada una un componente "organism" de Astro aislado, con su propio CSS scoped y (cuando hace falta) su propio `<script>`:
  - **Banner** — hero, foto, estadísticas animadas, botones de acción.
  - **Sobre mí** — bio corta y áreas de foco.
  - **Stack Tecnológico** — tecnologías agrupadas por dominio (frontend, backend, bases de datos, mobile, gaming, IoT).
  - **Experiencia** — línea de tiempo horizontal interactiva (scroll nativo + arrastre), hecha 100% con posicionamiento CSS, sin canvas ni WebGL.
  - **Certificaciones** — una cinta de miniaturas en loop infinito que abre un modal tipo coverflow 3D, animado con un loop continuo de física de velocidad/fricción (`requestAnimationFrame`) en vez de transiciones CSS discretas, pensado para rendir bien en mobile de gama baja. Las imágenes de los certificados se sirven desde un bucket público de Cloudflare R2.
  - **Educación** — formación universitaria junto con desarrollo autodidacta y formación continua.
  - **Contacto** — redes sociales, más un widget que revela el correo detrás de un pequeño captcha matemático (los dígitos se dibujan en `<canvas>`, no como texto seleccionable/rastreable), como fricción liviana anti-spam.
  - **Footer** — firma con efecto glitch neon, portada del sistema de diseño de AzanoLabs.
- **La compatibilidad con iOS Safari se trata como algo prioritario**: cada `backdrop-filter`, `clip-path` animado y `user-select` tiene su prefijo `-webkit-` puesto a mano, ya que el pipeline de build de este proyecto no autoprefija CSS propio.
- **Sin estilos inline.** Todo el estado visual vive en clases/modificadores CSS; la única excepción permitida son custom properties de CSS calculadas en tiempo de ejecución para valores genuinamente dinámicos.

### Estructura del proyecto

```
src/
├── assets/          # imágenes locales optimizadas (astro:assets)
├── components/
│   ├── atoms/       # piezas más chicas (boot intro, hojas flotantes, badges)
│   ├── molecules/   # piezas compuestas chicas (cards, selector de idioma, email reveal)
│   └── organisms/   # secciones completas de la página (Banner, ExperienceSection, etc.)
├── i18n/            # diccionarios es/en + selector de idioma del lado del cliente
├── layouts/         # BaseLayout (head, secuencia de carga, scripts globales)
├── pages/           # index.astro — la página única
└── styles/          # tokens globales (colores, fuentes, resets base)
```

### Desarrollo

```sh
pnpm install
pnpm dev             # servidor de desarrollo local
pnpm astro check     # diagnósticos de tipos/Astro
pnpm build           # build de producción (también la única forma de detectar errores de sintaxis CSS)
pnpm preview         # previsualizar el build de producción localmente
```
