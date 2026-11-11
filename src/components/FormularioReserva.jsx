import { useState } from 'react'
import { crearReserva } from '../services/api'
import CampoTexto from './CampoTexto'

const VACIO = { nombre: '', email: '', servicioId: '', fecha: '', mensaje: '' }

export default function FormularioReserva({ servicios, onReservaCreada }) {
  const [datos, setDatos] = useState(VACIO)
  const [enviando, setEnviando] = useState(false)
  const [error, setError] = useState(null)
  const [exito, setExito] = useState(null)

  const cambiar = (e) => {
    setDatos((previo) => ({ ...previo, [e.target.name]: e.target.value }))
    setExito(null)
  }

  const enviar = async (e) => {
    e.preventDefault()
    setEnviando(true)
    setError(null)
    setExito(null)
    try {
      const guardada = await crearReserva({ ...datos, servicioId: Number(datos.servicioId) })
      setExito(`¡Listo, ${guardada.nombre || datos.nombre}! Tu reserva quedó registrada.`)
      setDatos(VACIO)
      onReservaCreada(guardada)
    } catch (err) {
      setError(err.message)
    } finally {
      setEnviando(false)
    }
  }

  return (
    <section id="formulario-reserva">
      <h2>Formulario de Reserva / Contacto</h2>
      <form onSubmit={enviar}>
        <CampoTexto id="nombre" etiqueta="Nombre completo:" valor={datos.nombre}
          onChange={cambiar} placeholder="Escriba su nombre" required />
        <CampoTexto id="email" etiqueta="Correo Electrónico:" tipo="email" valor={datos.email}
          onChange={cambiar} placeholder="ejemplo@correo.com" required />
        <CampoTexto id="servicioId" etiqueta="Servicio:" tipo="select" valor={datos.servicioId}
          onChange={cambiar} required
          hijos={
            <>
              <option value="">Seleccione un servicio</option>
              {servicios.map((s) => (
                <option key={s.id} value={s.id}>{s.nombre} (RD$ {Number(s.precio).toFixed(2)})</option>
              ))}
            </>
          } />
        <CampoTexto id="fecha" etiqueta="Fecha de la cita:" tipo="date" valor={datos.fecha}
          onChange={cambiar} required />
        <CampoTexto id="mensaje" etiqueta="Mensaje (opcional):" tipo="textarea" valor={datos.mensaje}
          onChange={cambiar} placeholder="Algún detalle sobre el corte que quieres..." />

        <button type="submit" disabled={enviando || servicios.length === 0}>
          {enviando ? 'Enviando…' : 'Enviar Reserva'}
        </button>

        {error && <p className="estado estado-error" role="alert">No se pudo enviar: {error}</p>}
        {exito && <p className="estado estado-exito" role="status">{exito}</p>}
      </form>
    </section>
  )
}
