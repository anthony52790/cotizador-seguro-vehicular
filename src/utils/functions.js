export const formatPrice = (price) => {
  const numberFormat = new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'PEN'
  })
  return numberFormat.format(price)
}