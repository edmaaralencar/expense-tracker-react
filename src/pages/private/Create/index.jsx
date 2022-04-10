import { useState } from 'react'

import { useAppContext } from '../../../context/AppContext'

import * as S from './styles'

import { Link, useNavigate, useParams } from 'react-router-dom'
import { FiArrowDownCircle, FiArrowUpCircle } from 'react-icons/fi'

import InputBox from '../../../components/InputBox'
import { toast } from 'react-toastify'

import categories from '../../../utils/categories'

const Create = () => {
  const navigate = useNavigate()
  const { createTransaction, createSaving } = useAppContext()
  const { type } = useParams()

  const [transactionType, setTransactionType] = useState('deposit')
  const [formData, setFormData] = useState({
    title: '',
    amount: 0,
    category: '',
    availableAmount: 0,
    totalAmount: 0
  })

  const { title, amount, category, availableAmount, totalAmount } = formData

  const handleChange = event => {
    setFormData(prevState => ({
      ...prevState,
      [event.target.name]:
        event.target.name === 'amount'
          ? Number(event.target.value)
          : event.target.value
    }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    if (type === 'transaction') {
      if (!title || !amount || !category || category === 'Escolha')
        return toast.error('Preencha todos os campos')

      const transaction = {
        title,
        amount,
        category,
        type: transactionType
      }

      toast.success('Transação criada com sucesso.')
      createTransaction(transaction)
      navigate('/transactions')

      return
    }

    if (!title || !availableAmount || !totalAmount)
      return toast.error('Preencha todos os campos')

    const saving = {
      title,
      availableAmount: Number(availableAmount),
      totalAmount: Number(totalAmount)
    }

    toast.success('Item de poupança criada com sucesso.')
    createSaving(saving)
    navigate('/savings')
  }

  return (
    <S.Container>
      <h1>Criar {type === 'transaction' ? 'transação' : 'item da poupança'}</h1>

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

            <div className="category">
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

            <S.TypeButtonContainer className="grid">
              <S.TypeButton
                type="button"
                onClick={() => setTransactionType('deposit')}
                isActive={transactionType === 'deposit'}
                activeColor="green"
              >
                <FiArrowUpCircle color="#12A454" size={25} />
                Entrada
              </S.TypeButton>

              <S.TypeButton
                type="button"
                onClick={() => setTransactionType('withdraw')}
                isActive={transactionType === 'withdraw'}
                activeColor="red"
              >
                <FiArrowDownCircle color="#E52E4D" size={25} />
                Saída
              </S.TypeButton>
            </S.TypeButtonContainer>
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

        <button className="btn-submit">Criar</button>
        <Link to={`/${type}s`}>Cancelar</Link>
      </form>
    </S.Container>
  )
}

export default Create
