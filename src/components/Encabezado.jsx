import logo from '../assets/logo.jpg'

export default function Encabezado({ nombre, eslogan }) {
  return (
    <header id="inicio">
      <div className="pista">
        <img className="logo" src={logo} alt={`Logo de ${nombre}`} width="300" />
      </div>
      <h1>{nombre}</h1>
      <p><em>{eslogan}</em></p>
    </header>
  )
}
