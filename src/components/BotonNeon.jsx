export default function BotonNeon({ href, variante, icono, children }) {
  return (
    <a className={`neon neon-${variante}`} href={href} target="_blank" rel="noopener noreferrer">
      {icono}
      {children}
    </a>
  )
}
