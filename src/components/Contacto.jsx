import BotonNeon from './BotonNeon'

const iconoWhatsApp = (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
    <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.27-1.38A9.9 9.9 0 1 0 12.04 2zm0 1.8a8.1 8.1 0 1 1-4.3 14.96l-.3-.19-3.13.82.84-3.05-.2-.32A8.1 8.1 0 0 1 12.04 3.8zm-3.2 4.06c-.2 0-.5.07-.77.36-.26.3-1 1-1 2.4s1.03 2.8 1.17 2.98c.15.2 2.02 3.2 5 4.36 2.47.97 2.97.78 3.5.73.54-.05 1.73-.7 1.97-1.4.25-.68.25-1.27.17-1.4-.07-.12-.27-.2-.56-.35-.3-.15-1.73-.86-2-.95-.27-.1-.47-.15-.66.15-.2.3-.76.95-.93 1.15-.17.2-.34.22-.63.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.65-1.6-.9-2.18-.23-.56-.47-.49-.65-.5h-.55z" />
  </svg>
)

const iconoMapa = (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
    <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
  </svg>
)

const URL_MAPA =
  "https://www.google.com/maps/place/18%C2%B027'03.5%22N+69%C2%B055'54.8%22W/@18.4508974,-69.9318813,22a,75y,19.01h,67.34t"

export default function Contacto() {
  return (
    <section id="contacto-rapido">
      <h2>Contacto Directo</h2>
      <p>Puedes comunicarte con nosotros directamente a través de los siguientes enlaces:</p>
      <div className="botones">
        <BotonNeon href="https://wa.me/18294508024" variante="whatsapp" icono={iconoWhatsApp}>
          WhatsApp: 829-450-8024
        </BotonNeon>
        <BotonNeon href={URL_MAPA} variante="mapa" icono={iconoMapa}>
          Ver ubicación en Google Maps
        </BotonNeon>
      </div>
    </section>
  )
}
