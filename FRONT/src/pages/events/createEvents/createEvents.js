import { modalNewEvent } from '../../../utils/modal/modalNewEvent/modalNewEvent'

export const createEvents = async () => {
  const section = document.createElement('section')
  section.className = 'create-event-section'

  const h2 = document.createElement('h2')
  h2.className = 'h2-global-title'
  h2.textContent = 'Añadir un nuevo evento'
  const buttonNewEvent = document.createElement('button')
  buttonNewEvent.className = 'button'
  buttonNewEvent.textContent = 'Crear evento'
  buttonNewEvent.addEventListener('click', modalNewEvent)

  section.append(h2, buttonNewEvent)
  app.append(section)
}
