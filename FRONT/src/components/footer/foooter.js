export const footer = () => {
  const footer = document.createElement('footer')
  footer.id = 'footer'

  const p = document.createElement('p')
  p.className = 'p-footer'
  p.textContent = 'Planet Express Company© 3024. Todos los derechos reservados'

  footer.append(p)
  document.body.append(footer)
}
