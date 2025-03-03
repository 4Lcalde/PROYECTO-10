import { eventTemplate } from '../../../utils/events/eventTemplate/eventTemplate'
import { filterEvents } from '../../../utils/events/filterEvents/FilterEvents'

export const eventPanel = async () => {
  const dataTemplate = {
    sectionName: 'all-events-section',
    h2Class: 'h2-global-title',
    h2Text: 'Todos los eventos',
    articleClass: 'event-article-container',
    divFilterClass: 'div-filter-container',
    selectId: 'select-all-filter',
    divEventsClass: 'div-events-container'
  }

  eventTemplate(dataTemplate)

  const divEventsContainer = document.querySelector(
    `.${dataTemplate.divEventsClass}`
  )
  const select = document.querySelector(`#${dataTemplate.selectId}`)
  filterEvents(divEventsContainer, 'all')

  select.addEventListener('change', async () => {
    divEventsContainer.innerHTML = ''
    filterEvents(divEventsContainer, select.value)
  })
}
