// Muestra carga, error o vacío con roles ARIA para lectores de pantalla.
export default function Estado({ cargando, error, vacio, onReintentar }) {
  if (cargando) {
    return <p className="estado" role="status">Cargando datos…</p>
  }
  if (error) {
    return (
      <div className="estado estado-error" role="alert">
        <p>No se pudieron cargar los datos: {error}</p>
        {onReintentar && <button type="button" onClick={onReintentar}>Reintentar</button>}
      </div>
    )
  }
  if (vacio) {
    return <p className="estado">Todavía no hay servicios disponibles.</p>
  }
  return null
}
