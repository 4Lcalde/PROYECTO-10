import { fetchTemplate } from '../../../components/fetch/fetch'
import { header } from '../../../components/header/header'
import { userPage } from '../userPage/userPage'
export const updateImgProfile = async (divImgUser, imgUser) => {
  let newImg = null

  const inputFile = document.createElement('input')
  inputFile.type = 'file'
  inputFile.accept = 'image/*'
  inputFile.style.display = 'none'

  document.body.appendChild(inputFile)
  inputFile.click()

  inputFile.addEventListener('change', (e) => {
    const preDivModifyButtons = document.querySelector('.div-modify-buttons')
    if (preDivModifyButtons) {
      preDivModifyButtons.remove()
    }

    const divModifyButtons = document.createElement('div')
    divModifyButtons.className = 'div-event-buttons'

    const modifyButton = document.createElement('button')
    modifyButton.className = 'button modify-button'
    modifyButton.textContent = 'Guardar'

    const cancelButton = document.createElement('button')
    cancelButton.className = 'button modify-button'
    cancelButton.textContent = 'Cancelar'
    cancelButton.addEventListener('click', userPage)

    if (e.target.files[0]) {
      const reader = new FileReader()
      reader.onload = function (e) {
        imgUser.src = e.target.result
      }

      reader.readAsDataURL(e.target.files[0])
      newImg = e.target.files[0]
    }

    modifyButton.addEventListener('click', () => {
      if (newImg) {
        saveNewImage(newImg)
      } else {
        alert('Por favor, selecciona una imagen.')
      }
    })

    divModifyButtons.append(modifyButton, cancelButton)
    divImgUser.append(divModifyButtons)

    document.body.removeChild(inputFile)
  })
}

const saveNewImage = async (newImg) => {
  try {
    const userLoged = JSON.parse(localStorage.getItem('user'))
    const id = userLoged._id

    const body = new FormData()
    body.append('img', newImg)

    const { data: response } = await fetchTemplate(
      'users',
      'PUT',
      body,
      'multipart/form-data',
      id
    )

    if (response && response.img) {
      delete response.password

      localStorage.setItem('user', JSON.stringify(response))
      userPage()
      header()
    } else {
      console.error('Error: No se pudo actualizar la imagen.')
    }
  } catch (error) {
    console.error('Error al actualizar la imagen:', error.message)
  }
}
