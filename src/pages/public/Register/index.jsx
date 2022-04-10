import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import AuthWrapper from '../../../components/AuthWrapper'
import { useAppContext } from '../../../context/AppContext'

import * as S from './styles'

const Register = () => {
  const { registerUser, isLoading } = useAppContext()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const navigate = useNavigate()

  const { name, email, password } = formData

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()

    if (!name || !email || !password) {
      toast.error('Preencha todos os campos')
      return
    }

    registerUser(formData)
    toast.success('Conta criada com sucesso')

    setTimeout(() => {
      navigate('/login')
    }, 3000)
  }

  return (
    <S.Container>
      <AuthWrapper title="Registro">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <S.InputBox>
              <label htmlFor="">Nome</label>
              <input
                name="name"
                value={name}
                onChange={handleChange}
                type="text"
                placeholder="Seu nome"
              />
            </S.InputBox>
            <S.InputBox>
              <label htmlFor="">Email</label>
              <input
                name="email"
                value={email}
                onChange={handleChange}
                type="text"
                placeholder="Seu email"
              />
            </S.InputBox>
            <S.InputBox>
              <label htmlFor="">Senha</label>
              <input
                name="password"
                value={password}
                onChange={handleChange}
                type="password"
                placeholder="Sua senha"
              />
            </S.InputBox>
          </div>

          <button disabled={isLoading} type="submit">
            Registrar
          </button>

          <Link to="/login">
            Já possui uma conta? <span>Faça login</span>
          </Link>
        </form>
      </AuthWrapper>
    </S.Container>
  )
}

export default Register
