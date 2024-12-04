import { optionsSelectFilterEvents } from '../../../data/data'

export const eventTemplate = (data) => {
  const app = document.querySelector('#app')
  const section = document.createElement('section')
  section.className = data.sectionName

  const h2 = document.createElement('h2')
  h2.className = data.h2Class
  h2.textContent = data.h2Text

  const article = document.createElement('article')
  article.className = data.articleClass

  const divFilterContainer = document.createElement('div')
  divFilterContainer.className = data.divFilterClass

  const select = document.createElement('select')
  select.id = data.selectId

  let iValue = 1
  for (const option of optionsSelectFilterEvents) {
    const optionElement = document.createElement('option')
    optionElement.value = 'option' + iValue
    optionElement.textContent = option
    select.append(optionElement)
    iValue++
  }
  const divEventsContainer = document.createElement('div')
  divEventsContainer.className = data.divEventsClass

  app.append(section)
  section.append(h2, article)
  article.append(divFilterContainer, divEventsContainer)
  divFilterContainer.append(select)
}
