import { eventTemplate } from '../../../utils/events/eventTemplate/eventTemplate'
import { filterEvents } from '../../../utils/events/filterEvents/FilterEvents'

export const myEvents = async () => {
  const dataTemplate = {
    sectionName: 'my-events-section',
    h2Class: 'h2-global-title',
    h2Text: 'Mis eventos',
    articleClass: 'event-myArticle-container',
    divFilterClass: 'div-myFilter-container',
    selectId: 'select-myFilter',
    divEventsClass: 'div-myEvents-container'
  }

  eventTemplate(dataTemplate)

  const divEventsContainer = document.querySelector(
    `.${dataTemplate.divEventsClass}`
  )

  const select = document.querySelector(`#${dataTemplate.selectId}`)
  filterEvents(divEventsContainer, 'mine')

  select.addEventListener('change', () => {
    divEventsContainer.innerHTML = ''
    filterEvents(divEventsContainer, select.value)
  })
}
