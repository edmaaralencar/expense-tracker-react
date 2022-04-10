import * as S from './styles'

import { FiArrowDown, FiArrowUp, FiDollarSign } from 'react-icons/fi'
import { formatCurrency } from '../../utils/format'

const Summary = ({ transactions }) => {
  const total = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'withdraw') {
      return acc + -transaction.amount
    }

    return acc + transaction.amount
  }, 0)

  const incomes = transactions
    .filter(transaction => transaction.type === 'deposit')
    .reduce((acc, transaction) => acc + transaction.amount, 0)

  const outcomes = transactions
    .filter(transaction => transaction.type === 'withdraw')
    .reduce((acc, transaction) => acc + transaction.amount, 0)

  return (
    <S.Container>
      <S.SummaryCard>
        <S.SummaryText>
          <span>Total</span>
          <div>
            <FiDollarSign size={20} color="#000000" />
          </div>
        </S.SummaryText>

        <h3>{formatCurrency(total)}</h3>
      </S.SummaryCard>
      <S.SummaryCard>
        <S.SummaryText>
          <span>Entradas</span>
          <div>
            <FiArrowUp size={20} color="#000000" />
          </div>
        </S.SummaryText>

        <h3>{formatCurrency(incomes)}</h3>
      </S.SummaryCard>
      <S.SummaryCard>
        <S.SummaryText>
          <span>Saídas</span>
          <div>
            <FiArrowDown size={20} color="#000000" />
          </div>
        </S.SummaryText>

        <h3>{formatCurrency(outcomes)}</h3>
      </S.SummaryCard>
    </S.Container>
  )
}

export default Summary
