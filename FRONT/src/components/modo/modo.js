export const changeMode = () => {
  const logo = document.querySelector('.logo')
  document.body.classList.toggle('dark')
  const p = document.querySelectorAll('p')

  if (document.body.className === 'dark') {
    logo.src = './public/assets/darkLogo.png'
    localStorage.setItem('modo', 'dark')
  } else {
    logo.src = './public/assets/logo.png'
    localStorage.setItem('modo', '')
  }
}
