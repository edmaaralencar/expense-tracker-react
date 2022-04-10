import * as S from './styles'

import { Link } from 'react-router-dom'
import { FiPlusSquare } from 'react-icons/fi'
import { useEffect } from 'react'
import { useAppContext } from '../../../context/AppContext'
import Loading from '../../../components/Loading'
import SavingsItem from '../../../components/SavingsItem'

const Savings = () => {
  const { getSavings, savings, isLoading } = useAppContext()

  useEffect(() => {
    getSavings()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <S.Container>
      <div className="title">
        <h1>Poupança</h1>
        <Link to="/create/saving">
          <FiPlusSquare size={20} />
          Criar item
        </Link>
      </div>

      {savings.length === 0 ? (
        <p>Nenhum item de poupança encontrado...</p>
      ) : (
        <>
          <div className="savings-container">
            {savings.map(saving => (
              <SavingsItem showButton saving={saving} key={saving._id} />
            ))}
          </div>
        </>
      )}
    </S.Container>
  )
}

export default Savings
