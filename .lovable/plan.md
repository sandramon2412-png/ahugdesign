## A Hug Design — Sitio premium en React

Voy a tomar tu HTML como base de diseño y construir un sitio web completo, modular y con calidad de producción usando el stack del proyecto (TanStack Start + Tailwind + shadcn). Mantengo el estilo botánico/americana (sage, terracotta, espresso, tipografías Cormorant + Dancing Script + Jost) y subo el nivel donde el HTML era plano.

### Estructura de páginas (rutas separadas para SEO)

```
/                 Landing (Hero, Brand Promise, Story, Process, Collections, Gallery, Final CTA)
/collections      Listado completo de colecciones
/collections/america-250   Detalle de la colección activa
/about            Historia extendida de Sandra + valores
/contact          Formulario funcional + datos de contacto
```

Cada ruta con su propio `head()` (title, description, og:title, og:image) para que se vea bien al compartir y en Google.

### Diseño premium

- **Sistema de diseño en `styles.css`**: tokens en oklch para los colores de tu paleta (sage, sage-dark, sage-light, terra, terra-dark, linen, cream, espresso, umber, blush, beige). Tipografías cargadas vía Google Fonts (Cormorant Garamond, Dancing Script, Jost).
- **Componentes reutilizables**: `Navbar`, `Footer`, `BotanicalDivider` (los SVG decorativos), `SectionHeading`, `CollectionCard`, `RevealOnScroll` (intersection observer para animaciones que ya tienes con `.reveal`).
- **Mejoras visuales sobre el HTML original**:
  - Hero con video de fondo + parallax sutil del contenido al hacer scroll.
  - Animaciones de entrada limpias (sin saltos), respetando `prefers-reduced-motion`.
  - Navbar con cambio de fondo al hacer scroll (ya está en tu CSS, lo replico bien).
  - Cards de colecciones con hover refinado (escala suave de imagen + transición de overlay).
  - Galería bento responsive de verdad (no rota en móvil).
  - Tipografía con jerarquía clara y `text-wrap: pretty` en párrafos largos.
  - Micro-interacciones en botones (terra, ghost, fcta) con estados focus accesibles.
- **Accesibilidad**: contraste AA, alt en imágenes, navegación por teclado, focus visible.
- **Responsive real** en mobile, tablet y desktop con los breakpoints que ya usas.

### Contenido y assets

- Mantengo todos los textos de tu HTML (Sandra, "Designs That Feel Like a Hug", las 5 colecciones, los 3 pasos del proceso, etc.). Lo ajustamos en iteraciones después.
- Como las imágenes y video del HTML apuntan a rutas locales (`uploads/...`) que no tengo, dejo **placeholders elegantes con gradientes botánicos** en cada hueco y los marco claramente. Cuando subas las imágenes/video reales los reemplazo en un siguiente turno (te diré exactamente qué archivos necesito y dónde van).
- Los SVG decorativos (botanical dividers, símbolos de Brand Promise, scroll mouse) los inlineo igual que en tu HTML — esos no requieren assets externos.

### Formulario de contacto funcional (Lovable Cloud)

- Tabla `contact_messages` (id, name, email, subject, message, created_at) con RLS: solo insert público, lectura restringida.
- Server function `submitContactMessage` con validación Zod (nombre 1-100, email válido, mensaje 10-2000) tanto en cliente como servidor.
- UI con shadcn `Form` + `Input` + `Textarea` + `Button` + `toast` de éxito/error.
- Honeypot anti-spam y rate-limit básico por IP en el server.

### Página de detalle "America 250"

Ruta `/collections/america-250` con:
- Hero de la colección (gradient azul patriótico igual que la card).
- Grid de productos (placeholders por ahora) con nombre, descripción corta, precio opcional y CTA "Ver en Etsy" enlazando a tu shop.
- Sección "About this collection" con copy patriótico.
- CTA final.

Las otras 4 colecciones quedan como "Coming Soon" (igual que en tu HTML) sin ruta propia todavía.

### Detalles técnicos

- TanStack Start v1, file-based routing en `src/routes/`.
- Tailwind v4 con tokens en `styles.css` (sin `tailwind.config.js`).
- Componentes shadcn ya disponibles (Button, Form, Input, Textarea, Card, Sonner para toasts).
- Lovable Cloud para la tabla `contact_messages` y la server function — sin API keys que configurar.
- Animaciones con CSS + un hook `useReveal` ligero (IntersectionObserver), sin librerías pesadas.
- SEO: `head()` por ruta, sitemap implícito por las rutas declaradas, Open Graph completo.

### Lo que vas a poder hacer después de aprobar

1. Ver la landing completa en preview con el look americana premium.
2. Navegar entre Home, Collections, America 250, About, Contact.
3. Enviar un mensaje de contacto y verlo guardado en Cloud.
4. Decirme qué textos cambiar e ir iterando.
5. Subir tus imágenes/video reales y los conecto en su lugar.

### Lo que NO incluye este plan (lo agendamos después si quieres)

- E-commerce propio (sigues vendiendo en Etsy, los CTA llevan ahí).
- Blog / newsletter signup.
- Versión multi-idioma.
- Páginas de detalle para las colecciones "Coming Soon".
