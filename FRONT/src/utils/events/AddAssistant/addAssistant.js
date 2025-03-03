import { fetchTemplate } from '../../../components/fetch/fetch'
import { eventGenerator } from '../../../pages/events/event'

export const addAssistant = async (userID, event) => {
  const assistants = []
  for (let clave in event.assistants) {
    assistants.push(event.assistants[clave]._id)
  }
  const assistantsDuplicated = assistants.includes(userID)

  if (assistantsDuplicated) {
    alert('Asistente duplicado')
    return
  }

  event.assistants = [...event.assistants, userID]

  const finalAssistants = JSON.stringify({
    assistants: [userID]
  })

  fetchTemplate(
    'events',
    'PUT',
    { assistants: [userID] },
    'application/json',
    `${event._id}/assistants`
  )

  eventGenerator()
}
