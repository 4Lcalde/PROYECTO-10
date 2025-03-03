import { fetchTemplate } from '../../../components/fetch/fetch'
import { logOut } from '../../../components/logOut/logOut'
import { userPage } from '../../../pages/user/userPage/userPage'
import { closeModalClick } from '../../modal/closeModal/closeModal'

export const deleteUser = async () => {
  const app = document.querySelector('#app')

  const userLoged = JSON.parse(localStorage.getItem('user'))
  const id = userLoged._id

  const modalContainer = document.createElement('dialog')
  modalContainer.id = 'deleteUserModal'
  modalContainer.className = 'deleteModal'
  const h3 = document.createElement('h3')
  h3.textContent = '¿Desea borrar el usuario?'
  h3.className = 'h3-global-title'

  const buttonContainer = document.createElement('div')
  buttonContainer.className = 'div-buttons-user-page'
  const deleter = document.createElement('button')
  deleter.className = 'button'
  deleter.textContent = 'Eliminar'
  const cancel = document.createElement('button')
  cancel.className = 'button'
  cancel.textContent = 'Cancelar'
  buttonContainer.append(deleter, cancel)

  modalContainer.append(h3, buttonContainer)

  app.append(modalContainer)
  modalContainer.showModal()
  cancel.addEventListener('click', () => {
    modalContainer.close()
    modalContainer.remove()
    userPage()
  })
  deleter.addEventListener('click', async () => {
    try {
      await fetchTemplate('users', 'DELETE', null, 'application/json', id)
      modalContainer.close()
      modalContainer.remove()
      logOut()
    } catch (error) {
      console.error('Hubo un problema con la petición DELETE:', error)
    }
  })
  closeModalClick(modalContainer)
}
