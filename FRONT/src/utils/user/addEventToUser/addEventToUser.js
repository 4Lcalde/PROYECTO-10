import { fetchTemplate } from '../../../components/fetch/fetch'
import { eventGenerator } from '../../../pages/events/event'

export const addEventToUser = async (element, id) => {
  try {
    const updatedUser = await fetchTemplate(
      'users',
      'PUT',
      { confirmed: [element._id] },
      'application/json',
      id
    )
    eventGenerator()
  } catch (error) {
    console.error('Error en la solicitud:', error.message)
  }
}
