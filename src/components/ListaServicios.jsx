import { useEffect, useState } from 'react'
import { obtenerServicios } from '../services/api'
import ServicioItem from './ServicioItem'
import Estado from './Estado'

export default function ListaServicios({ onServiciosCargados }) {
  const [servicios, setServicios] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [intento, setIntento] = useState(0)

  useEffect(() => {
    let activo = true
    setCargando(true)
    setError(null)

    obtenerServicios()
      .then((datos) => {
        if (!activo) return
        setServicios(datos)
        onServiciosCargados(datos) // sube la lista al padre para el formulario
      })
      .catch((e) => activo && setError(e.message))
      .finally(() => activo && setCargando(false))

    return () => { activo = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intento])

  return (
    <>
      <h3>Nuestros Servicios y Precios</h3>
      <Estado
        cargando={cargando}
        error={error}
        vacio={!cargando && !error && servicios.length === 0}
        onReintentar={() => setIntento((n) => n + 1)}
      />
      {!cargando && !error && servicios.length > 0 && (
        <ul className="servicios">
          {servicios.map((s) => (
            <ServicioItem key={s.id} nombre={s.nombre} precio={s.precio} />
          ))}
        </ul>
      )}
    </>
  )
}
