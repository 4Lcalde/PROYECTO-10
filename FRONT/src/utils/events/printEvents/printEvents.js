import {
  buttonAdd,
  buttonInfo,
  propiertyButtons,
  removeButton
} from '../../../components/buttonEvents/buttonEvents'
import { normalizeDate } from '../../../components/formattedDate/formattedDate'

export const printEvents = async (divEventsContainer, events, _id) => {
  const rol = JSON.parse(localStorage.getItem('user')).rol

  try {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    for (const event of events) {
      const divEvent = document.createElement('div')
      divEvent.className = 'div-event'

      const eventDate = new Date(event.date)
      const formattedDate = normalizeDate(eventDate)

      divEvent.innerHTML = `
      <div class="event-info-container">
        <p class="p-info-container">${event.event}</p>
        <p class="p-info-container">${formattedDate}</p>
      </div>
      <div class="img-event-container">
        <img src="${event.img}" alt="Imagen del evento" class="event-img" />
      </div>
    `

      divEventsContainer.append(divEvent)

      const divButtons = document.createElement('div')
      divButtons.className = 'div-event-buttons'

      buttonInfo(divButtons, event)

      if (divEventsContainer.className === 'div-myEvents-container') {
        removeButton(divButtons, event, _id)
      } else if (
        divEventsContainer.className === 'div-events-container' &&
        event.assistants.every((assistant) => assistant._id !== _id)
      ) {
        buttonAdd(divButtons, _id, event)
      }

      if ((event.creator && event.creator._id === _id) || rol === 'admin') {
        propiertyButtons(divButtons, event, today)
      }

      if (eventDate <= today) {
        divEvent.classList.add('disabled')
        divButtons.innerHTML =
          '<h4 class="h4-global-title">Evento finalizado</h4>'
      }

      divEvent.append(divButtons)
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error.message)
  }
}
