// API de prueba SIN dependencias, solo para desarrollar.
// Si ya tienes tu API real, no necesitas este archivo: solo cambia VITE_API_URL en .env
import { createServer } from 'node:http'

const servicios = [
  { id: 1, nombre: 'Corte de adulto', precio: 500 },
  { id: 2, nombre: 'Corte de niños', precio: 400 },
  { id: 3, nombre: 'Cerquillos', precio: 300 },
  { id: 4, nombre: 'Facial', precio: 200 },
  { id: 5, nombre: 'Tinte', precio: 200 },
  { id: 6, nombre: 'Cejas', precio: 100 },
]
const reservas = []

const cabeceras = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
}
const responder = (res, codigo, cuerpo) => {
  res.writeHead(codigo, cabeceras)
  res.end(JSON.stringify(cuerpo))
}

createServer((req, res) => {
  if (req.method === 'OPTIONS') return responder(res, 204, {})
  if (req.method === 'GET' && req.url === '/api/servicios') return responder(res, 200, servicios)
  if (req.method === 'GET' && req.url === '/api/reservas') return responder(res, 200, reservas)

  if (req.method === 'POST' && req.url === '/api/reservas') {
    let texto = ''
    req.on('data', (c) => (texto += c))
    req.on('end', () => {
      try {
        const r = JSON.parse(texto)
        if (!r.nombre || !r.email || !r.servicioId || !r.fecha) {
          return responder(res, 400, { mensaje: 'Faltan campos obligatorios' })
        }
        const nueva = { id: reservas.length + 1, ...r }
        reservas.push(nueva)
        responder(res, 201, nueva)
      } catch {
        responder(res, 400, { mensaje: 'JSON inválido' })
      }
    })
    return
  }
  responder(res, 404, { mensaje: 'Ruta no encontrada' })
}).listen(3000, () => console.log('API de prueba en http://localhost:3000/api'))
