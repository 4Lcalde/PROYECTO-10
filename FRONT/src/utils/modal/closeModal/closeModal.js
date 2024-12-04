export const closeModalClick = (modal, container) => {
  document.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.close()
      modal.remove()
    }
  })
}
