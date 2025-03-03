import { fetchTemplate } from '../../../components/fetch/fetch'
import { eventGenerator } from '../../../pages/events/event'

export const removeAssistant = async (element, id) => {
  const updatedAssistants = element.assistants.filter(
    (assistant) => assistant._id !== id
  )

  console.log('Asistentes antes:', element.assistants)
  console.log('Asistentes después:', updatedAssistants)

  try {
    const updatedEvent = await fetchTemplate(
      'events',
      'PUT',
      { assistants: updatedAssistants },
      'application/json',
      `${element._id}/remove`
    )

    if (updatedEvent.status !== 200) {
      throw new Error(
        'No se pudo actualizar los asistentes en el servidor, macho'
      )
    }

    eventGenerator()
  } catch (error) {
    console.error('Error al actualizar los asistentes:', error.message)
  }
}
