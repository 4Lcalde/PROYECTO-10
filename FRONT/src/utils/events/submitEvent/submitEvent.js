import { fetchTemplate } from '../../../components/fetch/fetch'
import { eventGenerator } from '../../../pages/events/event'

export const submitEvent = async (body, modalNewEvent) => {
  try {
    console.log(body)

    const response = await fetchTemplate(
      'events',
      'POST',
      body,
      body instanceof FormData ? 'multipart/form-data' : 'application/json'
    )

    if (response.status === 400) {
      const preError = document.querySelector('.error-event')
      if (preError) {
        preError.remove()
      }
      const error = document.createElement('p')
      error.className = 'error-event'
      error.textContent = response.data.Message
      modalNewEvent.append(error)
      return
    }

    modalNewEvent.close()
    modalNewEvent.remove()
    eventGenerator()
  } catch (error) {
    console.error('Error al enviar el evento:', error)
  }
}
