import { fetchTemplate } from '../../../components/fetch/fetch'
import { eventGenerator } from '../../../pages/events/event'

export const updateEventSubmit = async (body, form, eventID) => {
  const token = localStorage.getItem('token')

  try {
    const response = await fetchTemplate(
      'events',
      'PUT',
      body,
      body instanceof FormData ? 'multipart/form-data' : 'application/json',
      eventID
    )

    eventGenerator()
  } catch (error) {
    console.error('Error al actualizar el evento:', error)
  }
}
