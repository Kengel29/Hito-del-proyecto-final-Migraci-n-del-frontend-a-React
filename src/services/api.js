// Capa de acceso a datos (fetch).
// - Con VITE_API_URL definida: usa tu API real.
// - Sin VITE_API_URL (p. ej. GitHub Pages sin API publicada): modo demo, que
//   lee public/servicios.json con fetch() y guarda las reservas solo en memoria.
const BASE = import.meta.env.VITE_API_URL
export const MODO_DEMO = !BASE

async function pedir(ruta, opciones) {
  const respuesta = await fetch(`${BASE}${ruta}`, opciones)
  if (!respuesta.ok) {
    let detalle = ''
    try {
      const cuerpo = await respuesta.json()
      detalle = cuerpo.mensaje || cuerpo.message || ''
    } catch {
      /* la respuesta no traía JSON */
    }
    throw new Error(detalle || `Error ${respuesta.status} al consultar el servidor`)
  }
  return respuesta.json()
}

export async function obtenerServicios() {
  if (MODO_DEMO) {
    const r = await fetch(`${import.meta.env.BASE_URL}servicios.json`)
    if (!r.ok) throw new Error(`Error ${r.status} al cargar los servicios`)
    return r.json()
  }
  return pedir('/servicios')
}

export async function crearReserva(reserva) {
  if (MODO_DEMO) {
    await new Promise((ok) => setTimeout(ok, 400))
    return { id: Date.now(), ...reserva }
  }
  return pedir('/reservas', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(reserva),
  })
}
