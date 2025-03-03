import { fetchTemplate } from '../../../components/fetch/fetch'
import { modalUserInfo } from '../../../utils/modal/modalUserInfo/modalUserInfo'

export const employeesList = async (articleUsers, divArticleUsers) => {
  try {
    if (!localStorage.getItem('token')) {
      throw new Error('No se encontró un token de autorización.')
    }
    const { data: response } = await fetchTemplate('users', 'GET')
    response.sort((a, b) => a.name.localeCompare(b.name))

    const search = document.createElement('input')
    search.className = 'input-search'
    search.name = 'buscador'
    search.id = 'buscador'
    search.placeholder = 'Buscar empleado'
    articleUsers.append(search)

    response.forEach((element) => {
      const divEmployeeItem = document.createElement('div')
      divEmployeeItem.className = 'home-div-info'

      divEmployeeItem.innerHTML = `  
        <h4 class="home-info-name">${element.name} ${element.lastname}</h4>
        <div class="home-info-img"><img src="${element.img}" alt=""></div>
      `

      const infoUserButton = document.createElement('button')
      infoUserButton.className = 'button'
      infoUserButton.textContent = `Conoce a ${element.name}`
      infoUserButton.addEventListener('click', () => {
        modalUserInfo(element)
      })

      divEmployeeItem.append(infoUserButton)
      divArticleUsers.append(divEmployeeItem)

      element.divEmployeeItem = divEmployeeItem
    })

    search.addEventListener('keyup', (e) => {
      if (e.target.matches('#buscador')) {
        response.forEach((element) => {
          const fullName = `${element.name} ${element.lastname}`.toLowerCase()
          fullName.includes(e.target.value.toLowerCase())
            ? element.divEmployeeItem.classList.remove('filtro')
            : element.divEmployeeItem.classList.add('filtro')
        })
      }
    })
  } catch (error) {
    console.error('Error al cargar la lista de empleados:', error.message)
  }
}
