import { useEffect } from 'react'
import * as S from './styles'

import Chart from '../../../components/Chart'

import { useAppContext } from '../../../context/AppContext'

import Summary from '../../../components/Summary'
import Table from '../../../components/Table'
import SavingsItem from '../../../components/SavingsItem'

import generateRandomSavingItem from '../../../utils/generateRandomItem'
import { Link } from 'react-router-dom'

const Home = () => {
  const { transactions, getTransactions, savings, getSavings } = useAppContext()

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([getTransactions(), getSavings()])
    }

    fetchData()
  }, [])

  return (
    <>
      <S.TopSide>
        <div className="d-flex">
          <h2>Dashboard</h2>

          <Summary transactions={transactions} />
        </div>

        <div className="d-flex">
          <h2>Poupança</h2>

          {savings.length === 0 ? (
            <SavingsItem
              saving={{ title: 'Nenhum', availableAmount: 0, totalAmount: 0 }}
            />
          ) : (
            <SavingsItem saving={generateRandomSavingItem(savings)} />
          )}
        </div>
      </S.TopSide>

      <S.BottomSide>
        <div>
          <div className="title">
            <h2>Transações recentes</h2>
            <Link to="/transactions">Ver mais</Link>
          </div>
          <Table
            transactions={transactions.slice(
              Math.max(transactions.length - 5, 0)
            )}
          />
        </div>
        {/* <div className="chart">
          <Chart />
        </div> */}
      </S.BottomSide>
    </>
  )
}

export default Home
