import * as S from './styles'

import { useNavigate } from 'react-router-dom'

import { FiEdit, FiTrash2 } from 'react-icons/fi'

import { formatCurrency, formatIconCategory } from '../../utils/format'
import { useAppContext } from '../../context/AppContext'

const Table = ({ transactions }) => {
  const navigate = useNavigate()
  const { deleteTransaction } = useAppContext()

  return (
    <S.TableContainer>
      {transactions.map(transaction => (
        <S.TableItem key={transaction._id}>
          {formatIconCategory(transaction.category)}
          <span className="table-item-category">{transaction.category}</span>
          <span>{new Date(transaction.createdAt).toLocaleString().split(', ')[0]}</span>
          <span>{transaction.title}</span>
          {transaction.type === 'deposit' ? (
            <span>{formatCurrency(transaction.amount)}</span>
          ) : (
            <span>-{formatCurrency(transaction.amount)}</span>
          )}
          <div className="icon-container">
            <FiEdit
              onClick={() => navigate(`/edit/transaction/${transaction._id}`)}
              className="table-item-icon-trash"
              size={25}
            />
            <FiTrash2
              onClick={() => deleteTransaction(transaction._id)}
              className="table-item-icon-trash"
              size={25}
            />
          </div>
        </S.TableItem>
      ))}
    </S.TableContainer>
  )
}

export default Table
