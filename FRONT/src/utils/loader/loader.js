export const loader = async () => {
  if (!document.querySelector('#loader')) {
    const body = document.querySelector('body')
    const span = document.createElement('span')
    span.className = 'loader'
    span.id = 'loader'
    body.append(span)
  }
}

export const showLoader = async () => {
  const loaderElement = document.querySelector('#loader')
  if (loaderElement) {
    loaderElement.style.display = 'block'
  }
}

export const hideLoader = async () => {
  const loaderElement = document.querySelector('#loader')
  if (loaderElement) {
    loaderElement.remove()
  }
}
