# Cubilete Barber Shop — Frontend en React (Vite)

## Ejecutar
```bash
npm install
npm run api   # terminal 1: API de prueba (omitir si usas tu API real)
npm run dev   # terminal 2: abre http://localhost:5173
```

## Conectar tu API real
1. Edita `.env` y cambia `VITE_API_URL`.
2. Ajusta las rutas (`/servicios`, `/reservas`) en `src/services/api.js`.
3. Tu API debe permitir CORS desde `http://localhost:5173`.

Contrato esperado:
- `GET  /servicios` → `[{ id, nombre, precio }]`
- `POST /reservas`  ← `{ nombre, email, servicioId, fecha, mensaje }` → objeto creado con `id`

## Requisitos del hito
| Requisito | Dónde |
|---|---|
| Vite + React | `package.json`, `vite.config.js` |
| 4+ componentes reutilizables | `src/components/` (13) |
| `props` | `ServicioItem`, `BotonNeon`, `CampoTexto`, `Estado`... |
| `useState` | `App`, `FormularioReserva`, `ListaServicios` |
| Lista desde la API | `ListaServicios` → `ServicioItem` |
| Formulario funcional | `FormularioReserva` (POST) |
| `fetch()` | `src/services/api.js` |
| `useEffect` | `ListaServicios` |
| Carga / error / datos | `Estado.jsx` |
| Actualización dinámica | `ReservasRecientes` |
| Accesibilidad / responsive | `role`, `aria-*`, `label/htmlFor`, `focus-visible`, media queries |

## Publicar en GitHub Pages
1. Sube el proyecto a un repositorio (rama `main`).
2. Settings → Pages → Source: **GitHub Actions**.
3. (Opcional) Settings → Secrets and variables → Actions → Variables: crea `VITE_API_URL` con la URL pública de tu API.
   Sin esa variable la página corre en **modo demostración**.
