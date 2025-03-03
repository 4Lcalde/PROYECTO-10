import { fetchTemplate } from '../../../components/fetch/fetch'
import { header } from '../../../components/header/header'
import { home } from '../../../pages/home/home/home'

//! EJECUCIÓN DEL LOGIN

export const submitLogin = async (user, password, form) => {
  const p = document.createElement('p')
  p.className = 'error'
  const pError = document.querySelector('.error')
  if (pError) {
    pError.remove()
  }

  if (user === '' || password === '') {
    p.innerHTML = 'Debes introducir todos los datos'
    form.append(p)
    return
  }

  const objetoLogin = {
    user,
    password
  }

  try {
    const response = await fetchTemplate(
      'users',
      'POST',
      objetoLogin,
      'application/json',
      'login'
    )

    if (response.status === 400) {
      p.innerHTML = 'Usuario o contraseña incorrecto'
      p.className = 'error'
      form.append(p)
      return
    }

    delete response.data.userLog.password

    localStorage.setItem('token', response.data.token)
    localStorage.setItem('user', JSON.stringify(response.data.userLog))

    header(response.data.userLog)
    home(response.data.userLog)
  } catch (error) {
    console.error('Error al iniciar sesión:', error.message)
  }
}

//!EJECUCIÓN DEL REGISTRO
export const submitRegister = async (body, form) => {
  try {
    const user = body.get('user')
    const password = body.get('password')

    const res = await fetchTemplate(
      'users',
      'POST',
      body,
      'multipart/form-data',
      null,
      'register'
    )

    if (res.status === 400) {
      const errorRegier = document.querySelector('.error-register')
      if (errorRegier) {
        errorRegier.remove()
      }
      const error = document.createElement('p')
      error.className = 'error-register'
      error.textContent = res.data.Message
      form.append(error)

      return
    }

    if (res.status === 201) {
      submitLogin(user, password)
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error.message)
  }
}
