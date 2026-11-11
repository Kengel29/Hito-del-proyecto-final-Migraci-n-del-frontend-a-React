import ListaServicios from './ListaServicios'

export default function Servicios({ onServiciosCargados }) {
  return (
    <section id="descripcion-y-servicios">
      <h2>Sobre Nosotros</h2>
      <p>
        En <strong>Cubilete Barber Shop</strong> nos especializamos en brindar atención
        personalizada y cortes de alta calidad para el cuidado personal masculino. Nos
        enfocamos en ofrecer un ambiente cómodo y un servicio rápido.
      </p>
      <ListaServicios onServiciosCargados={onServiciosCargados} />
      <p><strong>Horario de atención:</strong> Lunes a Lunes de 9:00 a.m. a 10:00 p.m.</p>
    </section>
  )
}
