import { elementsNewEvent } from '../../../data/data'
import { submitEvent } from '../../events/submitEvent/submitEvent'
import { closeModalClick } from '../closeModal/closeModal'

export const modalNewEvent = () => {
  const userLoged = JSON.parse(localStorage.getItem('user'))
  if (!userLoged || !userLoged._id) {
    console.error('Usuario no logeado o sin ID.')
    return
  }
  const id = userLoged._id

  const app = document.querySelector('#app')

  const modalNewEvent = document.createElement('dialog')
  modalNewEvent.id = 'modalNewEvent'
  modalNewEvent.className = 'dialog'

  const spanClose = document.createElement('span')
  spanClose.className = 'span-close'
  spanClose.textContent = 'X'
  spanClose.addEventListener('click', () => {
    modalNewEvent.close()
    modalNewEvent.remove()
  })

  const form = document.createElement('form')
  form.className = 'form-data'

  form.append(spanClose)

  for (const element of elementsNewEvent) {
    const label = document.createElement('label')
    label.textContent = element
    label.htmlFor = element

    const input = document.createElement('input')
    input.id = element
    input.className = 'input-data'

    if (element === 'Foto') {
      input.type = 'file'
    } else if (element === 'Fecha') {
      input.type = 'date'
    }

    form.append(label, input)
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const event = document.querySelector('#Nombre')
    const date = document.querySelector('#Fecha')
    const place = document.querySelector('#Lugar')
    const img = document.querySelector('#Foto')
    const description = document.querySelector('#Descripción')
    const body = new FormData()

    body.append('event', event?.value.toLowerCase().trim())
    body.append('date', date?.value.trim())
    body.append('place', place?.value.toLowerCase().trim())
    body.append('img', img.files[0] || './public/assets/calendar-regular.svg')
    body.append('creator', id)
    body.append('description', description?.value.toLowerCase().trim())

    submitEvent(body, modalNewEvent)
  })

  const divButtons = document.createElement('div')
  divButtons.className = 'div-event-buttons'
  const confirm = document.createElement('button')
  confirm.className = 'button'
  confirm.textContent = 'Crear evento'
  confirm.type = 'submit'

  const cancel = document.createElement('button')
  cancel.className = 'button'
  cancel.type = 'button'
  cancel.textContent = 'Cancelar'
  cancel.addEventListener('click', () => {
    modalNewEvent.close()
    modalNewEvent.remove()
  })

  divButtons.append(confirm, cancel)
  form.append(divButtons)
  modalNewEvent.append(form)
  app.append(modalNewEvent)
  modalNewEvent.showModal()

  closeModalClick(modalNewEvent)
}
