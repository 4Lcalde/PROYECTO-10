import { userButtons } from '../../../data/data'
import { updateImgProfile } from '../updateImgProfile/UpdateImgProfile'

export const userPage = async () => {
  const storedUser = localStorage.getItem('user')
  if (!storedUser) {
    console.error('No se encontró información de usuario en localStorage.')
    return
  }

  const userLoged = JSON.parse(storedUser)
  if (!userLoged) {
    console.error(
      "No se encontró la propiedad 'data' en la información de usuario."
    )
    return
  }

  const app = document.querySelector('#app')
  app.innerHTML = ''

  const section = document.createElement('section')
  section.className = 'section-user-page'

  const h2 = document.createElement('h2')
  h2.className = 'h2-global-title'
  h2.textContent = 'Tus datos de usuario'

  const divImgUser = document.createElement('div')
  divImgUser.className = 'div-img-user'
  const divImgContainer = document.createElement('div')
  divImgContainer.className = 'div-img-Container'
  const imgUser = document.createElement('img')
  imgUser.className = 'img-user'
  imgUser.src = userLoged.img

  imgUser.addEventListener('click', () => {
    updateImgProfile(divImgUser, imgUser)
  })
  const imgChangeButton = document.createElement('button')
  imgChangeButton.className = 'button'
  imgChangeButton.textContent = 'Modificar imagen'

  imgChangeButton.addEventListener('click', () => {
    updateImgProfile(divImgUser, imgUser)
  })
  divImgContainer.append(imgUser)
  divImgUser.append(divImgContainer, imgChangeButton)

  const article = document.createElement('article')
  article.className = 'article-user-page'

  const { confirmed, rol, img, createdAt, updatedAt, __v, ...constructor } =
    userLoged
  for (const propiedad in constructor) {
    const propiedadModificada = propiedad
      .replace('user', 'Usuario')
      .replace('lastname', 'Apellido')
      .replace('name', 'Nombre')
      .replace('_id', 'ID')

    const div = document.createElement('div')
    div.className = 'div-data-user'

    const h3 = document.createElement('h3')
    h3.className = 'h3-global-title'
    h3.textContent = propiedadModificada

    const p = document.createElement('p')
    p.className = 'p-user-info'
    p.textContent = constructor[propiedad]

    if (propiedadModificada === 'Usuario') {
      p.textContent = '@' + constructor[propiedad]
    }

    div.append(h3, p)
    article.append(div)
  }

  const divButtons = document.createElement('div')
  divButtons.className = 'div-buttons-user-page'
  for (const boton of userButtons) {
    const button = document.createElement('button')
    button.textContent = boton.texto
    button.className = 'button'
    button.addEventListener('click', () => {
      boton.funcion()
    })
    divButtons.append(button)
  }

  section.append(h2, divImgUser, article, divButtons)
  app.append(section)
}
