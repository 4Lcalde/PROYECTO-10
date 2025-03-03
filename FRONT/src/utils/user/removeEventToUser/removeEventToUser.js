import { fetchTemplate } from '../../../components/fetch/fetch'
import { eventGenerator } from '../../../pages/events/event'

export const removeEventToUser = async (event, id) => {
  try {
    const { data: response } = await fetchTemplate(
      'users',
      'GET',
      null,
      'application/json',
      id
    )

    response.confirmed = response.confirmed.filter(
      (element) => element._id !== event._id
    )

    await fetchTemplate(
      'users',
      'PUT',
      { confirmed: response.confirmed },
      'application/json',
      id
    )

    eventGenerator()
  } catch (error) {
    console.error('Error al actualizar los asistentes:', error)
  }
}
