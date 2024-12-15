import { fetchTemplate } from '../../../components/fetch/fetch'
import { printEvents } from '../printEvents/printEvents'

export const filterEvents = async (divEventsContainer, list) => {
  const today = new Date().setHours(0, 0, 0, 0)
  const { _id } = JSON.parse(localStorage.getItem('user'))
  const noEventsMessage =
    '<h4 class="h4-global-title">Ningún evento con estas características</h4>'

  try {
    const { data: response } = await fetchTemplate('events', 'GET')
    response.sort((a, b) => new Date(a.date) - new Date(b.date))

    let filteredEvents = []
    if (
      list === 'mine' ||
      (list === 'option1' &&
        divEventsContainer.className === 'div-myEvents-container')
    ) {
      filteredEvents = response.filter(
        (evento) =>
          new Date(evento.date) >= today &&
          evento.assistants.some((assistant) => assistant._id === _id)
      )
    } else if (
      list === 'option2' &&
      divEventsContainer.className === 'div-myEvents-container'
    ) {
      filteredEvents = response.filter(
        (evento) =>
          new Date(evento.date) < today &&
          evento.assistants.some((assistant) => assistant._id === _id)
      )
    } else if (
      list === 'option3' &&
      divEventsContainer.className === 'div-myEvents-container'
    ) {
      filteredEvents = response.filter((evento) =>
        evento.assistants.some((assistant) => assistant._id === _id)
      )
    } else if (list === 'all' || list === 'option1') {
      filteredEvents = response.filter(
        (evento) =>
          new Date(evento.date) >= today &&
          (evento.assistants.length === 0 ||
            !evento.assistants.some((assistant) => assistant._id === _id))
      )
    } else if (list === 'option2') {
      filteredEvents = response.filter(
        (evento) =>
          new Date(evento.date) < today &&
          (evento.assistants.length === 0 ||
            !evento.assistants.some((assistant) => assistant._id === _id))
      )
    } else if (list === 'option3') {
      filteredEvents = response
    }

    filteredEvents.length === 0
      ? (divEventsContainer.innerHTML = noEventsMessage)
      : printEvents(divEventsContainer, filteredEvents, _id, list)
  } catch (error) {
    console.error('Error al iniciar sesión:', error.message)
  }
}
