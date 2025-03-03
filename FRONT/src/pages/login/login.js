import { submitLogin } from '../../utils/user/submitLoginRegister/submitLoginRegister'
import { register } from '../register/register'

export const login = () => {
  const body = document.querySelector('body')
  const app = document.querySelector('#app')
  app.innerHTML = ''
  const section = document.createElement('section')
  section.className = 'section-login'

  const h3 = document.createElement('h3')
  h3.className = 'h3-global-title'

  h3.textContent = 'Inicia sesión'

  const form = document.createElement('form')
  form.className = 'form-data'
  form.id = 'form-Login'

  const inputUser = document.createElement('input')
  inputUser.className = 'input-data'
  inputUser.placeholder = 'Introduce user o email'

  const inputPassword = document.createElement('input')
  inputPassword.placeholder = 'Introduce contraseña'
  inputPassword.className = 'input-data'
  inputPassword.type = 'password'

  const button = document.createElement('button')
  button.textContent = 'Iniciar sesión'
  button.className = 'button'

  const aRegister = document.createElement('a')
  aRegister.className = 'a-input'
  aRegister.textContent = '¿No tienes cuenta? Regístrate'

  aRegister.addEventListener('click', (e) => {
    e.preventDefault()
    register()
  })

  body.append(app)
  app.append(section)
  section.append(form)
  form.append(h3, inputUser, inputPassword, button, aRegister)

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    submitLogin(inputUser.value.trim(), inputPassword.value.trim(), form)
  })
}
