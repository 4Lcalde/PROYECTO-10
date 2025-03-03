import { valuesPrincipal } from '../../data/data'

export const presentation = () => {
  const app = document.querySelector('#app')
  app.innerHTML = ''

  const section = document.createElement('section')
  section.className = 'section-presentation'

  const articleTitle = document.createElement('article')
  articleTitle.className = 'article-presentation'
  articleTitle.id = 'article-title'
  const h1 = document.createElement('h1')
  h1.className = 'h1-global-title'
  h1.textContent = 'Polar Express'
  const h2Subtitle = document.createElement('h2')
  h2Subtitle.className = 'h2-global-title'
  h2Subtitle.textContent =
    'Más rápidos que la luz, más baratos que un robot usado'

  const articleHero = document.createElement('article')
  articleHero.className = 'article-hero'

  const divTextHero = document.createElement('div')
  divTextHero.className = 'div-text-hero'

  const h2hero = document.createElement('h2')
  h2hero.className = 'h2-global-title'
  h2hero.textContent = 'Tus envíos galáticos de confianza'

  const h3hero = document.createElement('h3')
  h3hero.className = 'h3-global-title'
  h3hero.textContent = 'Empresa 100% libre de portales verdes y viejos locos'

  const divImgHero = document.createElement('div')
  divImgHero.className = 'div-img-hero'
  const imgHero = document.createElement('img')
  imgHero.className = 'img-hero'
  imgHero.src = './public/assets/hero.jpeg'

  const articleValues = document.createElement('article')
  articleValues.className = 'article-values'

  const divValuesGlobal = document.createElement('div')
  divValuesGlobal.className = 'div-values-global'

  const divValuesContainer = document.createElement('div')
  divValuesContainer.className = 'div-values-container'

  const h3Values = document.createElement('h3')
  h3Values.className = 'h3-global-title'
  h3Values.textContent = '¿Por qué Planet Express? '

  for (const value of valuesPrincipal) {
    divValuesContainer.innerHTML += `<div class="value-element">
  <div class="text-value-container">  <p class="value-text">${value.texto}</p></div>
  <div class="img-container"><img src="${value.img}" alt="value-img" class="img-value"></div>
</div>`
  }

  divValuesGlobal.append(h3Values, divValuesContainer)
  articleValues.append(divValuesGlobal)
  divImgHero.append(imgHero)
  divTextHero.append(h2hero, h3hero)
  articleHero.append(divTextHero, divImgHero)
  articleTitle.append(h1, h2Subtitle)
  section.append(articleTitle, articleHero, articleValues)
  app.append(section)
}
