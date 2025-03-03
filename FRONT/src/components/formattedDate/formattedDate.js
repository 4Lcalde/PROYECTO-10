export const normalizeDate = (date) => {
  const newDate = date.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })

  return newDate
}
