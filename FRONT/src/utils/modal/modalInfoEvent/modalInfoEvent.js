import { buttonAdd } from '../../../components/buttonEvents/buttonEvents'
import { normalizeDate } from '../../../components/formattedDate/formattedDate'
import { closeModalClick } from '../closeModal/closeModal'

export const modalInfoEvent = async (event) => {
  console.log(event.assistants)

  const app = document.querySelector('#app')

  const eventDate = new Date(event.date)
  const formattedDate = normalizeDate(eventDate)

  const modalInfoEvent = document.createElement('dialog')
  modalInfoEvent.className = 'dialog'
  modalInfoEvent.id = 'modalInfoEvent'

  const divContainer = document.createElement('div')
  divContainer.className = 'div-dialog-container'
  const spanClose = document.createElement('span')
  spanClose.className = 'span-close'
  spanClose.textContent = 'X'
  spanClose.addEventListener('click', () => {
    modalInfoEvent.close()
    modalInfoEvent.remove()
  })
  const h3 = document.createElement('h3')
  h3.textContent = event.event
  h3.className = 'h3-global-title'
  const img = document.createElement('img')
  img.className = 'img-dialog'
  img.src = event.img
  const fecha = document.createElement('p')
  fecha.className = 'p-dialog'
  fecha.innerHTML = `  <span>Fecha: </span>${formattedDate}`
  const lugar = document.createElement('p')
  lugar.className = 'p-dialog'
  lugar.innerHTML = `  <span>Lugar: </span>${event.place}`
  const divDescription = document.createElement('div')
  divDescription.className = 'div-description-dialog'
  const h3Descripcion = document.createElement('h3')
  h3Descripcion.className = 'h3-global-title'
  h3Descripcion.textContent = 'Descripción del evento'
  const description = document.createElement('p')
  description.className = 'p-dialog'
  description.textContent = event.description
  const creator = document.createElement('p')
  creator.className = 'p-dialog creator'
  creator.textContent =
    event.creator && event.creator.name && event.creator.lastname
      ? `Evento creado por ${event.creator.name} ${event.creator.lastname}`
      : 'Evento creado por la empresa'

  const divAssistants = document.createElement('div')
  divAssistants.className = 'div-event-assistants'

  const h3Assistants = document.createElement('h3')
  h3Assistants.className = 'h3-global-title'
  h3Assistants.textContent = 'Asistentes:'

  divAssistants.append(h3Assistants)
  if (event.assistants.length === 0) {
    divAssistants.innerHTML =
      '<p class="p-dialog">Todavía no hay asistentes confirmados</p>'
  } else {
    for (const assistant of event.assistants) {
      divAssistants.innerHTML += `<p class="p-dialog">${assistant.name} ${assistant.lastname}</p>`
    }
  }
  const divButtons = document.createElement('div')
  divButtons.className = 'div-event-buttons'

  if (
    !event.assistants.some(
      (assistant) =>
        assistant._id === JSON.parse(localStorage.getItem('user'))._id
    )
  ) {
    buttonAdd(divButtons, JSON.parse(localStorage.getItem('user'))._id, event)
  }

  const buttonClose = document.createElement('button')
  buttonClose.className = 'button'
  buttonClose.textContent = 'Cerrar'
  buttonClose.addEventListener('click', () => {
    modalInfoEvent.close()
    modalInfoEvent.remove()
  })

  app.append(modalInfoEvent)
  modalInfoEvent.append(divContainer)
  divContainer.append(
    spanClose,
    h3,
    img,
    fecha,
    lugar,
    divDescription,
    creator,
    divAssistants,
    divButtons
  )
  divDescription.append(h3Descripcion, description)
  divButtons.append(buttonClose)
  modalInfoEvent.showModal()
  closeModalClick(modalInfoEvent)
}
