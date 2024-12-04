import { fetchTemplate } from '../../../components/fetch/fetch'
import { closeModalClick } from '../closeModal/closeModal'

export const modalUserInfo = async (user) => {
  const { data: response } = await fetchTemplate(
    'users',
    'GET',
    null,
    'application/json',
    user._id
  )
  const app = document.querySelector('#app')

  const modalInfoUser = document.createElement('dialog')
  modalInfoUser.id = 'modalInfoUser'
  modalInfoUser.className = 'dialog'

  const divContainer = document.createElement('div')
  divContainer.className = 'div-dialog-container'
  const spanClose = document.createElement('span')
  spanClose.className = 'span-close'
  spanClose.textContent = 'X'
  spanClose.addEventListener('click', () => {
    modalInfoUser.close()
    modalInfoUser.remove()
  })

  const h3 = document.createElement('h3')
  h3.className = 'h3-global-title'
  h3.textContent = `@${response.user}`

  const divImg = document.createElement('div')
  divImg.className = 'div-img-dialog'
  const img = document.createElement('img')
  img.className = 'img-dialog'
  img.src = response.img

  const divData = document.createElement('div')
  divData.className = 'div-data-user'

  const pName = document.createElement('p')
  pName.className = 'p-dialog'
  pName.innerHTML = `  <span>Nombre: </span>${response.name} ${response.lastname}`
  const pEmail = document.createElement('p')
  pEmail.className = 'p-dialog'
  pEmail.innerHTML = `  <span>email: </span>${response.email}`

  const divEventsUser = document.createElement('div')
  divEventsUser.className = 'div-event-user'

  const pEventos = document.createElement('p')
  pEventos.className = 'p-dialog'
  pEventos.textContent = 'Eventos a los que asiste'

  divEventsUser.append(pEventos)

  for (const event of response.confirmed) {
    const divEvent = document.createElement('div')
    divEvent.className = 'div-name-list'

    const pEvent = document.createElement('div')
    pEvent.className = 'p-name-list'
    pEvent.textContent = event.event

    divEvent.append(pEvent)
    divEventsUser.append(divEvent)

    divEvent.addEventListener('click', () => {
      modalInfoEvent(event)
    })
  }

  if (response.confirmed.length === 0) {
    divEventsUser.innerHTML = `    <h3 class="h3-global-title">Aun no ha confirmado eventos</h3>`
  }

  app.append(modalInfoUser)
  modalInfoUser.append(divContainer)
  divContainer.append(spanClose, h3, divImg, divData, divEventsUser)
  divImg.append(img)
  divData.append(pName, pEmail)
  modalInfoUser.showModal()

  closeModalClick(modalInfoUser)
}
