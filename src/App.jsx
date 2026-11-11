import { useState } from 'react'
import Encabezado from './components/Encabezado'
import Navegacion from './components/Navegacion'
import Servicios from './components/Servicios'
import Contacto from './components/Contacto'
import FormularioReserva from './components/FormularioReserva'
import ReservasRecientes from './components/ReservasRecientes'
import FotoFirma from './components/FotoFirma'
import Pie from './components/Pie'
import { MODO_DEMO } from './services/api'

const ENLACES = [
  { href: '#inicio', texto: 'Inicio' },
  { href: '#descripcion-y-servicios', texto: 'Servicios' },
  { href: '#contacto-rapido', texto: 'Contacto' },
  { href: '#formulario-reserva', texto: 'Reservar' },
]

export default function App() {
  // Estado compartido: los servicios los carga ListaServicios (API)
  // y los usa FormularioReserva; las reservas nuevas alimentan ReservasRecientes.
  const [servicios, setServicios] = useState([])
  const [reservas, setReservas] = useState([])

  return (
    <>
      <Encabezado nombre="Cubilete Barber Shop" eslogan="Tu estilo en las mejores manos" />
      <Navegacion enlaces={ENLACES} />
      {MODO_DEMO && (
        <p className="estado" role="note">
          Modo demostración: los servicios vienen de un archivo local y las reservas no se guardan en un servidor.
        </p>
      )}
      <main>
        <Servicios onServiciosCargados={setServicios} />
        <Contacto />
        <FormularioReserva
          servicios={servicios}
          onReservaCreada={(r) => setReservas((previas) => [r, ...previas])}
        />
        <ReservasRecientes reservas={reservas} servicios={servicios} />
        <FotoFirma
          alt="Estudiante Kendri Tatis junto al propietario Winner Cubilete"
          pie="Entrevista realizada en el local a Winner Cubilete (Propietario)."
        />
      </main>
      <Pie />
    </>
  )
}
