import { addAssistant } from '../../utils/events/AddAssistant/addAssistant'
import { deleteEvent } from '../../utils/events/deleteEvent/deleteEvent'
import { removeAssistant } from '../../utils/events/removeAssistant/removeAssistant'
import { updateEvent } from '../../utils/events/updateEvent/updateEvent'
import { modalInfoEvent } from '../../utils/modal/modalInfoEvent/modalInfoEvent'
import { addEventToUser } from '../../utils/user/addEventToUser/addEventToUser'
import { removeEventToUser } from '../../utils/user/removeEventToUser/removeEventToUser'

export const buttonInfo = (divButtons, element) => {
  const button = document.createElement('button')
  button.className = 'button'
  button.textContent = 'Más info'
  button.addEventListener('click', () => {
    modalInfoEvent(element)
  })
  divButtons.append(button)
}

export const buttonAdd = (divButtons, id, element) => {
  const button = document.createElement('button')
  button.className = 'button'
  button.textContent = 'Apuntarme'
  button.id = 'button-Add'
  button.addEventListener('click', () => {
    addAssistant(id, element, button)
    addEventToUser(element, id)
  })
  divButtons.append(button)
}

export const propiertyButtons = (divButtons, element, today) => {
  const button = document.createElement('button')
  button.className = 'button'
  button.textContent = 'Eliminar'
  button.addEventListener('click', async () => {
    await deleteEvent(element._id)
  })

  const updateButton = document.createElement('button')
  updateButton.className = 'button'
  updateButton.textContent = 'Modificar'
  updateButton.addEventListener('click', () => {
    updateEvent(element, today)
  })

  divButtons.append(updateButton, button)
}

export const removeButton = (divButtons, element, id) => {
  const button = document.createElement('button')
  button.className = 'button'
  button.textContent = 'No iré'
  divButtons.append(button)
  button.addEventListener('click', () => {
    removeAssistant(element, id)
    removeEventToUser(element, id)
  })
}

document.querySelectorAll('button').className = 'button'
