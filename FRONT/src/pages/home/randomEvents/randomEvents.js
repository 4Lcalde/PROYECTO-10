import { buttonInfo } from '../../../components/buttonEvents/buttonEvents'
import { fetchTemplate } from '../../../components/fetch/fetch'

export const randomEvents = async (divArticleEvents) => {
  const today = new Date()

  const { data: response } = await fetchTemplate('events', 'GET')

  const random = response.filter(
    (evento) => new Date(evento.date) >= today.setHours(0, 0, 0, 0)
  )

  for (let i = 0; i < 2; i++) {
    const divRandomEvents = document.createElement('div')
    divRandomEvents.className = 'home-div-info'

    const j = Math.floor(Math.random() * (random.length - 0))

    divRandomEvents.innerHTML = `  
    <h4 class="home-info-name">${random[j].event} </h4>
    <div class="home-info-img"><img src="${random[j].img}" alt=""></div>
 `
    const event = random[j]

    buttonInfo(divRandomEvents, random[j])
    random.splice(j, 1)
    divArticleEvents.append(divRandomEvents)
  }
}
