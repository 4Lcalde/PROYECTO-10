import { fetchTemplate } from '../../../components/fetch/fetch'
import { eventGenerator } from '../../../pages/events/event'

export const removeAssistant = async (element, id) => {
  element.assistants = element.assistants.filter(
    (assistant) => assistant._id !== id
  )

  try {
    const updatedEvent = await fetchTemplate(
      'events',
      'PUT',
      { assistants: element.assistants },
      'application/json',
      element._id
    )

    eventGenerator()
  } catch (error) {
    console.error('Error al actualizar los asistentes:', error.message)
  }
}
