// Muestra las reservas hechas en esta sesión; se actualiza sin recargar la página.
export default function ReservasRecientes({ reservas, servicios }) {
  if (reservas.length === 0) return null
  const nombreServicio = (id) => servicios.find((s) => s.id === id)?.nombre ?? 'Servicio'

  return (
    <section id="reservas-recientes" aria-live="polite">
      <h2>Tus reservas</h2>
      <ul className="servicios">
        {reservas.map((r) => (
          <li key={r.id}>
            <strong>{r.nombre}</strong> · {nombreServicio(r.servicioId)} · {r.fecha}
          </li>
        ))}
      </ul>
    </section>
  )
}
