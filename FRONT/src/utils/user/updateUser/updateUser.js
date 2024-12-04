import { updateValues } from '../../../data/data'
import { userPage } from '../../../pages/user/userPage/userPage'
import { updateUserSubmit } from '../updateUserSubmit/updateUserSubmit'

export const updateUser = async () => {
  const userLoged = JSON.parse(localStorage.getItem('user'))
  const {
    confirmed,
    rol,
    createdAt,
    updatedAt,
    __v,
    _id,
    img,
    ...constructor
  } = userLoged
  const constructorValue = Object.values(constructor)

  const app = document.querySelector('#app')
  app.innerHTML = ''

  const section = document.createElement('section')
  section.className = 'section-update-user'

  const h2 = document.createElement('h2')
  h2.className = 'h2-global-title'
  h2.textContent = '¿Qué datos deseas modificar?'

  const form = document.createElement('form')
  form.className = 'form-data'

  for (let i = 0; i < updateValues.length; i++) {
    const label = document.createElement('label')
    label.textContent = updateValues[i]
    label.setAttribute('for', updateValues[i])
    const input = document.createElement('input')
    input.className = 'input-data'
    input.value = constructorValue[i] || ''
    input.id = updateValues[i]

    if (label.textContent === 'Contraseña') {
      input.type = 'password'
      input.placeholder = '*******'
    }

    form.append(label, input)
  }

  const divButtons = document.createElement('div')
  divButtons.className = 'div-buttons-user-page'
  // Botón de modificar
  const modificar = document.createElement('button')
  modificar.className = 'button'
  modificar.textContent = 'Modificar'

  const cancelar = document.createElement('button')
  cancelar.className = 'button'
  cancelar.textContent = 'Cancelar'

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const userInput = form.querySelector('#Usuario')
    const nameInput = form.querySelector('#Nombre')
    const lastNameInput = form.querySelector('#Apellidos')
    const emailInput = form.querySelector('#Email')
    const passwordInput = form.querySelector('#Contraseña')

    const body = new FormData()
    userInput.value.trim() !== ''
      ? body.append('user', userInput.value.toLowerCase().trim())
      : null

    nameInput.value.trim() !== ''
      ? body.append('name', nameInput.value.toLowerCase().trim())
      : null

    lastNameInput.value.trim() !== ''
      ? body.append('lastname', lastNameInput.value.toLowerCase().trim())
      : null

    emailInput.value.trim() !== ''
      ? body.append('email', emailInput.value.toLowerCase().trim())
      : null

    passwordInput.value.trim() !== ''
      ? body.append('password', passwordInput.value.toLowerCase().trim())
      : null

    updateUserSubmit(body, form)
  })

  cancelar.addEventListener('click', userPage)

  divButtons.append(modificar, cancelar)
  form.append(divButtons)
  section.append(h2, form)
  app.append(section)
}
