import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import AuthWrapper from '../../../components/AuthWrapper'
import { useAppContext } from '../../../context/AppContext'

import * as S from './styles'

const Login = () => {
  const { loginUser, isLoading, user } = useAppContext()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate()

  const { email, password } = formData

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()

    if (!email || !password) {
      toast.error('Preencha todos os campos')
      return
    }

    loginUser(formData)
  }

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 500)
    }
  }, [navigate, user])

  return (
    <S.Container>
      <AuthWrapper title="Login">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
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
            Logar
          </button>

          <Link to="/register">
            Não possui uma conta? <span>Registre-se</span>
          </Link>
        </form>
      </AuthWrapper>
    </S.Container>
  )
}

export default Login
