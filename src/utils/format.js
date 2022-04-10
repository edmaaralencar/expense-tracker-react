import {
  FiDollarSign,
  FiBook,
  FiHeart,
  FiCrosshair,
  FiCoffee,
  FiShoppingCart
} from 'react-icons/fi'

export const formatCurrency = amount => {
  const options = { style: 'currency', currency: 'BRL' }
  return amount.toLocaleString('pt-BR', options)
}

export const formatIconCategory = category => {
  switch (category) {
    case 'Compras':
      return <FiShoppingCart className="table-item-icon" size={25} />
    case 'Alimentação':
      return <FiCoffee className="table-item-icon" size={25} />
    case 'Salário':
      return <FiDollarSign className="table-item-icon" size={25} />
    case 'Carro':
      return <FiCrosshair className="table-item-icon" size={25} />
    case 'Lazer':
      return <FiHeart className="table-item-icon" size={25} />
    case 'Estudos':
      return <FiBook className="table-item-icon" size={25} />

    default:
      break
  }
}

export const formatSavingsCurrency = amount => {
  return Math.abs(amount) > 999
    ? `R$ ${Math.sign(amount) * (Math.abs(amount) / 1000).toFixed(1)}K`
    : `R$ ${Math.sign(amount) * Math.abs(amount)}`
}
