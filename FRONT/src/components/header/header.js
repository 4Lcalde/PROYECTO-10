import { headerOptions, routes } from '../../data/data'
import { home } from '../../pages/home/home/home'

export const header = () => {
  const oldHeader = document.querySelector('#header')
  if (oldHeader) {
    oldHeader.remove()
  }

  const userLoged = JSON.parse(localStorage.getItem('user'))
  const app = document.querySelector('#app')

  const header = document.createElement('header')
  header.id = 'header'

  const logo = document.createElement('img')
  localStorage.getItem('modo') === 'dark'
    ? (logo.src = './public/assets/darkLogo.png')
    : (logo.src = './public/assets/logo.png')

  logo.className = 'logo'
  logo.alt = 'Logo'
  logo.addEventListener('click', () => {
    window.location.reload()
  })

  const nav = document.createElement('nav')
  nav.className = 'nav-header'
  const ul = document.createElement('ul')
  ul.className = 'ul-header'

  const userDiv = document.createElement('div')
  userDiv.className = 'user-div'

  const divOptions = document.createElement('div')

  const buttonToggle = document.createElement('button')
  buttonToggle.className = 'button-toggle'

  if (userLoged && userLoged.img) {
    const userImg = document.createElement('img')
    userImg.className = 'user-img'
    userImg.src = userLoged.img
    userImg.alt = 'User avatar'

    divOptions.className = 'div-options'

    if (window.innerWidth >= 850) {
      userImg.addEventListener('click', () =>
        divOptions.classList.toggle('activo')
      )
    }

    for (const option of headerOptions) {
      const button = document.createElement('button')
      button.textContent = option.texto
      button.className = 'button-header-ul-options button'
      button.setAttribute('aria-label', option.texto)

      button.addEventListener('click', () => {
        divOptions.classList.remove('activo')
        nav.classList.remove('toggle')
        buttonToggle.classList.remove('activado')
        option.funcion()
      })

      divOptions.append(button)
    }

    userDiv.append(userImg, divOptions)
  }

  for (const route of routes) {
    const li = document.createElement('li')
    li.className = 'li-route-header'
    const a = document.createElement('a')
    a.className = 'a-route-header'
    a.textContent = route.texto
    a.href = '#'
    a.setAttribute('aria-label', route.texto)

    a.addEventListener('click', () => {
      route.funcion()
      nav.classList.toggle('toggle')
      buttonToggle.classList.toggle('activado')
      divOptions.classList.remove('activo')
      userDiv.classList.remove('toggle')
    })

    li.append(a)
    ul.append(li)
  }

  let p = 1

  for (let i = 0; i < 3; i++) {
    const span = document.createElement('span')
    span.className = `span-toggle l${p}`
    buttonToggle.append(span)
    p++
  }

  buttonToggle.addEventListener('click', () => {
    buttonToggle.classList.toggle('activado')
    nav.classList.toggle('toggle')
    userDiv.classList.toggle('toggle')
    divOptions.classList.toggle('activo')
  })

  nav.append(ul)
  header.append(logo, nav, userDiv, buttonToggle)
  document.body.insertBefore(header, app)

  let ubicacionTop = 0
  let headerVisible = true

  const scroll = () => {
    const scrollTop = window.scrollY
    if (scrollTop > ubicacionTop && headerVisible) {
      header.classList.add('header-oculto')
      buttonToggle.classList.remove('activado')
      document.querySelector('.div-options').classList.remove('activo')
      nav.classList.remove('toggle')
      userDiv.classList.remove('toggle')
      headerVisible = false
    } else if (scrollTop < ubicacionTop && !headerVisible) {
      header.classList.remove('header-oculto')
      headerVisible = true
    }

    ubicacionTop = scrollTop <= 0 ? 0 : scrollTop
  }
  window.addEventListener('scroll', scroll)
}
