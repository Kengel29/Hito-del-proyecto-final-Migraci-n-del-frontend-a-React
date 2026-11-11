export default function ServicioItem({ nombre, precio }) {
  return (
    <li>
      <strong>{nombre}:</strong>{' '}
      <span className="precio">RD$ {Number(precio).toFixed(2)}</span>
    </li>
  )
}
