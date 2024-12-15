import { fetchTemplate } from '../../../components/fetch/fetch'
import { eventGenerator } from '../../../pages/events/event'

export const submitEvent = async (body, modalNewEvent) => {
  modalNewEvent.innerHTML = ''
  try {
    const response = await fetchTemplate(
      'events',
      'POST',
      body,
      body instanceof FormData ? 'multipart/form-data' : 'application/json'
    )

    modalNewEvent.close()
    modalNewEvent.remove()
    eventGenerator()
  } catch (error) {
    console.error('Error al enviar el evento:', error)
  }
}
