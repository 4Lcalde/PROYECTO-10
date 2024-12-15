import { elementsUpdateEvent } from '../../../data/data'
import { closeModalClick } from '../../modal/closeModal/closeModal'
import { updateEventSubmit } from '../updateEventSubmit/updateEventSubmit'

export const updateEvent = async (element, today) => {
  const todayDate = new Date(today)
  todayDate.setHours(0, 0, 0, 0)
  let i = 0
  const {
    _id,
    creator,
    assistants,
    createdAt,
    updatedAt,
    __v,
    ...constructor
  } = element

  const app = document.querySelector('#app')
  const modalUpdateEvent = document.createElement('dialog')
  modalUpdateEvent.id = 'modalUpdateEvent'

  const spanClose = document.createElement('span')
  spanClose.className = 'span-close'
  spanClose.textContent = 'X'
  spanClose.addEventListener('click', () => {
    modalUpdateEvent.close()
    modalUpdateEvent.remove()
  })

  const h3 = document.createElement('h3')
  h3.className = 'h3-global-title'
  h3.textContent = 'Modificar evento'

  const form = document.createElement('form')
  form.className = 'form-data'
  form.append(spanClose, h3)

  for (let clave in constructor) {
    const label = document.createElement('label')
    label.textContent = elementsUpdateEvent[i]
    label.setAttribute('for', clave)

    const input = document.createElement('input')
    input.className = 'input-data'
    input.value = element[clave]
    input.id = clave

    if (clave === 'img') {
      input.type = 'file'
    } else if (clave === 'date') {
      input.type = 'date'
      const fecha = new Date(element[clave])
      const fechaFormateada = fecha.toISOString().split('T')[0]
      input.value = fechaFormateada
    }

    form.append(label, input)
    i++
  }

  const divButtons = document.createElement('div')
  divButtons.className = 'div-event-buttons'
  const updateButton = document.createElement('button')
  updateButton.textContent = 'Actualizar'
  updateButton.className = 'button'

  const cancelButton = document.createElement('button')
  cancelButton.textContent = 'Cancelar'
  cancelButton.className = 'button'

  form.addEventListener('submit', (e) => {
    const error = document.querySelector('#error')
    if (error) {
      error.remove()
    }
    e.preventDefault()

    const eventInput = form.querySelector('#event')
    const dateInput = form.querySelector('#date')
    const dateInputValue = new Date(dateInput.value)
    dateInputValue.setHours(0, 0, 0, 0)

    const placeInput = form.querySelector('#place')
    const descriptionInput = form.querySelector('#description')
    const imgInput = form.querySelector('#img')

    if (dateInputValue < todayDate) {
      const pError = document.createElement('p')
      pError.id = 'error'
      pError.textContent = 'No puedes seleccionar una fecha anterior a hoy'
      form.append(pError)
      return
    }

    const body = new FormData()

    if (eventInput.value.trim() !== '') {
      body.append('event', eventInput.value.toLowerCase().trim())
    }

    if (dateInput.value.trim() !== '') {
      body.append('date', dateInput.value.toLowerCase().trim())
    }

    if (placeInput.value.trim() !== '') {
      body.append('place', placeInput.value.toLowerCase().trim())
    }

    if (descriptionInput.value.trim() !== '') {
      body.append('description', descriptionInput.value.toLowerCase().trim())
    }

    if (imgInput.files.length > 0) {
      body.append('img', imgInput.files[0])
    }

    updateEventSubmit(body, form, _id)
  })

  cancelButton.addEventListener('click', () => {
    modalUpdateEvent.close()
    modalUpdateEvent.remove()
  })

  modalUpdateEvent.append(form)
  divButtons.append(updateButton, cancelButton)
  form.append(divButtons)
  app.append(modalUpdateEvent)

  modalUpdateEvent.showModal()
  closeModalClick(modalUpdateEvent)
}
