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
    element.id = input.id
    form.append(element)
  }

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
    body.append(
      'user',
      document.querySelector('#user-register').value.toLowerCase().trim()
    )
    body.append(
      'name',
      document.querySelector('#name-register').value.toLowerCase().trim()
    )
    body.append(
      'lastname',
      document.querySelector('#lastName-register').value.toLowerCase().trim()
    )
    body.append(
      'email',
      document.querySelector('#email-register').value.toLowerCase().trim()
    )
    body.append(
      'password',
      document.querySelector('#password-register').value.trim()
    )
    body.append('img', document.querySelector('#img-register').files[0])

    submitRegister(body, form)
  })
}
