import { fetchTemplate } from '../../../components/fetch/fetch'
import { eventGenerator } from '../../../pages/events/event'
import { closeModalClick } from '../../modal/closeModal/closeModal'

export const deleteEvent = async (id) => {
  const app = document.querySelector('#app')
  const token = localStorage.getItem('token')

  const modalContainer = document.createElement('dialog')
  modalContainer.id = 'deleteEventModal'
  modalContainer.className = 'deleteModal'

  const h3 = document.createElement('h3')
  h3.className = 'h3-global-title'
  h3.textContent = '¿Desea borrar el Evento?'

  const buttonContainer = document.createElement('div')
  buttonContainer.className = 'div-event-buttons'
  const deleter = document.createElement('button')
  deleter.className = 'button'
  deleter.textContent = 'Eliminar'
  const cancel = document.createElement('button')
  cancel.className = 'button'
  cancel.textContent = 'Cancelar'
  buttonContainer.append(deleter, cancel)

  modalContainer.append(h3, buttonContainer)

  //

  app.append(modalContainer)
  modalContainer.showModal()
  cancel.addEventListener('click', () => {
    modalContainer.close()
    modalContainer.remove()
  })
  deleter.addEventListener('click', async () => {
    try {
      const res = await fetchTemplate(
        'events',
        'DELETE',
        null,
        'application/json',
        id
      )

      modalContainer.close()
      modalContainer.remove()
      eventGenerator()
    } catch (error) {
      console.error('Hubo un problema con la petición DELETE:', error)
    }
  })
  closeModalClick(modalContainer)
}
