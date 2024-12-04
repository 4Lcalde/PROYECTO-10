import { createEvents } from './createEvents/createEvents'

import { eventPanel } from './eventPanel/eventPanel'
import { myEvents } from './myEvents/myEvents'

export const eventGenerator = async () => {
  const app = document.querySelector('#app')
  app.innerHTML = ''

  await myEvents()
  await eventPanel()
  await createEvents()
}
