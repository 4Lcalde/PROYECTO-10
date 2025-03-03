import { employeesList } from '../employeesList/employeesList'
import { randomEvents } from '../randomEvents/randomEvents'

export const home = () => {
  const app = document.querySelector('#app')
  app.innerHTML = ''

  const h1 = document.createElement('h1')
  h1.className = 'h1-home'
  h1.textContent = 'Bienvenido a Polar Express'

  const section = document.createElement('section')
  section.className = 'home-section'

  const articleUsers = document.createElement('article')
  articleUsers.className = 'article-home'

  const divArticleUsers = document.createElement('div')
  divArticleUsers.className = 'div-article-home'

  const h2Users = document.createElement('h2')
  h2Users.className = 'h2-global-title'
  h2Users.textContent = 'Conoce al equipo'

  employeesList(articleUsers, divArticleUsers)

  const articleEvents = document.createElement('article')
  articleEvents.className = 'article-home'

  const h2Events = document.createElement('h2')
  h2Events.className = 'h2-global-title'
  h2Events.textContent = 'Eventos que te pueden interesar'

  const divArticleEvents = document.createElement('div')
  divArticleEvents.id = 'random-events'
  divArticleEvents.className = 'div-article-home'
  randomEvents(divArticleEvents)

  app.append(h1, section)
  section.append(articleUsers, articleEvents)
  articleUsers.append(h2Users, divArticleUsers)
  articleEvents.append(h2Events, divArticleEvents)
}
