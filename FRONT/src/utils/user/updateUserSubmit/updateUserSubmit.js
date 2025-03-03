import { fetchTemplate } from '../../../components/fetch/fetch'
import { userPage } from '../../../pages/user/userPage/userPage'

export const updateUserSubmit = async (body, form) => {
  try {
    const userLoged = JSON.parse(localStorage.getItem('user'))
    const id = userLoged._id

    const { data: response } = await fetchTemplate(
      'users',
      'PUT',
      body,
      'multipart/form-data',
      id
    )

    if (response.Message) {
      const errorRegistered = document.querySelector('.error-register')

      if (errorRegistered) {
        errorRegistered.remove()
      }
      const error = document.createElement('p')
      error.className = 'error-register'
      error.textContent = response.Message
      form.append(error)
      return
    }

    delete response.password

    localStorage.setItem('user', JSON.stringify(response))

    userPage()
    return response
  } catch (error) {
    console.error('Error updating user:', error.message)
  }
}
