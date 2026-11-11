import foto from '../assets/foto.jpeg'

export default function FotoFirma({ alt, pie }) {
  return (
    <section id="firma">
      <img className="foto-firma" src={foto} alt={alt} width="180" />
      <p><small>{pie}</small></p>
    </section>
  )
}
