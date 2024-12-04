export const logOut = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('id')
  localStorage.removeItem('user')
  window.location.reload()
}
