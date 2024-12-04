import { dataRegister } from '../../data/data'
import { submitRegister } from '../../utils/user/submitLoginRegister/submitLoginRegister'
import { login } from '../login/login'

export const register = async () => {
  const app = document.querySelector('#app')
  const section = document.createElement('section')
  section.className = 'section-login'
  app.innerHTML = ''

  // Crear elementos del formulario
  const h3 = document.createElement('h3')
  h3.className = 'h3-global-title'
  h3.textContent = 'Registrate'

  const form = document.createElement('form')
  form.className = 'form-data'

  form.append(h3)

  for (const input of dataRegister) {
    const element = document.createElement('input')
    element.type = input.type
    element.placeholder = input.texto
    element.className = 'input-data'
    form.append(element)
  }
  const nameInput = document.createElement('input')
  nameInput.placeholder = 'Introduce tu nombre'
  nameInput.className = 'input-data'

  const lastNameInput = document.createElement('input')
  lastNameInput.placeholder = 'Introduce tus apellidos'
  lastNameInput.className = 'input-data'

  const userInput = document.createElement('input')
  userInput.placeholder = 'Introduce un user'
  userInput.className = 'input-data'

  const emailInput = document.createElement('input')
  emailInput.className = 'input-data'
  emailInput.placeholder = 'email@example.com'
  emailInput.type = 'email'

  const passwordInput = document.createElement('input')
  passwordInput.className = 'input-data'
  passwordInput.placeholder = '******'
  passwordInput.type = 'password'

  const imgInput = document.createElement('input')
  imgInput.className = 'input-data'
  imgInput.id = 'imgInput'
  imgInput.type = 'file' // Input de tipo archivo, opcional

  const labelImg = document.createElement('label')
  labelImg.textContent = 'Imagen de perfil'
  labelImg.htmlFor = 'imgInput'

  const aReturnLogin = document.createElement('a')
  aReturnLogin.className = 'a-input'
  aReturnLogin.textContent = '¿Ya tienes cuenta? Logueate'

  aReturnLogin.addEventListener('click', (e) => {
    e.preventDefault()
    login()
  })

  const button = document.createElement('button')
  button.className = 'button'
  button.textContent = 'Enviar'

  // Añadir elementos al formulario
  form.append(button, aReturnLogin)
  app.append(section)
  section.append(form)

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const body = new FormData()
    body.append('user', userInput.value.toLowerCase().trim())
    body.append('name', nameInput.value.toLowerCase().trim())
    body.append('lastname', lastNameInput.value.toLowerCase().trim())
    body.append('email', emailInput.value.toLowerCase().trim())
    body.append('password', passwordInput.value.trim())
    body.append('img', imgInput.files[0])

    submitRegister(body, form)
  })
}
