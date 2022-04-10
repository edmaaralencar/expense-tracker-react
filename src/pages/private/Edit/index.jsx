import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import InputBox from '../../../components/InputBox'
import { useAppContext } from '../../../context/AppContext'
import categories from '../../../utils/categories'

import * as S from './styles'

const Edit = () => {
  const navigate = useNavigate()
  const { transactions, savings, updateSaving, updateTransaction } =
    useAppContext()
  const { id, type } = useParams()
  const [formData, setFormData] = useState({
    title: '',
    amount: 0,
    category: '',
    availableAmount: 0,
    totalAmount: 0
  })

  const { title, amount, category, availableAmount, totalAmount } = formData

  useEffect(() => {
    const getFormData = () => {
      if (type === 'transaction') {
        const transaction = transactions.find(
          transaction => transaction._id === id
        )

        setFormData({
          title: transaction?.title,
          amount: transaction?.amount,
          category: transaction?.category
        })
        return
      }

      const saving = savings.find(saving => saving._id === id)

      setFormData({
        title: saving?.title,
        availableAmount: saving?.availableAmount,
        totalAmount: saving?.totalAmount
      })
    }

    getFormData()
  }, [id, savings, transactions, type])

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()

    if (type === 'transaction') {
      const transaction = {
        title,
        amount: Number(amount),
        category
      }

      if (category === 'Escolha') return toast.error('Troque a categoria para uma válida')

      updateTransaction(id, transaction)
      toast.success('Transação atualizada com sucesso')
      navigate('/transactions')
      return
    }

    const saving = {
      title,
      availableAmount: Number(availableAmount),
      totalAmount: Number(totalAmount)
    }

    updateSaving(id, saving)
    toast.success('Item de poupança atualizado com sucesso')
    navigate('/savings')
  }

  return (
    <S.Container>
      <h1>
        Editar {type === 'transaction' ? 'transação' : 'item da poupança'}
      </h1>

      <form onSubmit={handleSubmit}>
        {type === 'transaction' ? (
          <>
            <InputBox>
              <label htmlFor="">Título</label>
              <input
                onChange={handleChange}
                name="title"
                value={title}
                type="text"
              />
            </InputBox>

            <InputBox>
              <label htmlFor="">Valor</label>
              <input
                onChange={handleChange}
                name="amount"
                value={amount}
                type="number"
              />
            </InputBox>

            <div className="total-amount">
              <InputBox>
                <label htmlFor="">Categoria</label>
                <select
                  onChange={handleChange}
                  value={category}
                  name="category"
                >
                  <option value="Escolha">Escolha</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </InputBox>
            </div>
          </>
        ) : (
          <>
            <InputBox>
              <label htmlFor="">Título</label>
              <input
                onChange={handleChange}
                name="title"
                value={title}
                type="text"
              />
            </InputBox>
            <InputBox>
              <label htmlFor="">Quantia disponível</label>
              <input
                onChange={handleChange}
                name="availableAmount"
                value={availableAmount}
                type="number"
              />
            </InputBox>
            <div className="total-amount">
              <InputBox>
                <label htmlFor="">Quantia total</label>
                <input
                  onChange={handleChange}
                  name="totalAmount"
                  value={totalAmount}
                  type="number"
                />
              </InputBox>
            </div>
          </>
        )}

        <button type="submit" className="btn-submit">
          Editar
        </button>
        <Link to={`/${type}s`}>Cancelar</Link>
      </form>
    </S.Container>
  )
}

export default Edit
