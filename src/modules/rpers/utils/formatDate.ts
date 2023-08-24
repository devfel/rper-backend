export const getActualDate = () => {
  const now = new Date()
  const formatter = new Intl.DateTimeFormat('pt-BR')

  return formatter.format(now)
}
