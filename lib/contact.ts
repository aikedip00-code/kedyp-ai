// Coloca aquí el número definitivo con código de país, sin +, espacios ni guiones.
// Ejemplo de formato: código de país + número nacional.
export const WHATSAPP_NUMBER = "5534341256"

export const WHATSAPP_MESSAGE = `Hola 👋, me interesa conocer más sobre KEDYP AI.

Quisiera una demostración para saber cómo la inteligencia artificial puede ayudar a automatizar mi negocio.

¿Podrían brindarme más información?`

export function getWhatsAppUrl(): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
}
