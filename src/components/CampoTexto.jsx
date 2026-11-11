// Campo de formulario reutilizable (input, textarea o select) con su label.
export default function CampoTexto({ id, etiqueta, tipo = 'text', valor, onChange, hijos, ...resto }) {
  let control
  if (tipo === 'textarea') {
    control = <textarea id={id} name={id} rows="4" value={valor} onChange={onChange} {...resto} />
  } else if (tipo === 'select') {
    control = (
      <select id={id} name={id} value={valor} onChange={onChange} {...resto}>
        {hijos}
      </select>
    )
  } else {
    control = <input id={id} name={id} type={tipo} value={valor} onChange={onChange} {...resto} />
  }
  return (
    <div>
      <label htmlFor={id}>{etiqueta}</label><br />
      {control}
    </div>
  )
}
