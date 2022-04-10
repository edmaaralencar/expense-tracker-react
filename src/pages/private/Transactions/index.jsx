import * as S from './styles'

import { FiPlusSquare } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../../context/AppContext'
import { useEffect } from 'react'
import Table from '../../../components/Table'
import Loading from '../../../components/Loading'

const Transactions = () => {
  const { getTransactions, transactions, isLoading } = useAppContext()

  useEffect(() => {
    getTransactions()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <S.Container>
      <div className="title">
        <h1>Transações</h1>
        <Link to="/create/transaction">
          <FiPlusSquare size={20} />
          Criar transação
        </Link>
      </div>

      {transactions.length === 0 ? (
        <p>Nenhuma transação encontrada...</p>
      ) : (
        <Table transactions={transactions} />
      )}

    </S.Container>
  )
}

export default Transactions
