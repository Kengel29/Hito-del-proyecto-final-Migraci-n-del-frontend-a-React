export default function Navegacion({ enlaces }) {
  return (
    <nav aria-label="Navegación principal">
      {enlaces.map((e) => (
        <a key={e.href} href={e.href}>{e.texto}</a>
      ))}
    </nav>
  )
}
