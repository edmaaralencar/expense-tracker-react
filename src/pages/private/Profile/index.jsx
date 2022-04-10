import * as S from './styles'

import InputBox from '../../../components/InputBox'
import { useAppContext } from '../../../context/AppContext'
import { useState } from 'react'

const Profile = () => {
  const { user, updateUser } = useAppContext()
  const [formData, setFormData] = useState({
    name: user?.name,
    email: user?.email
  })

  const { name, email } = formData

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()

    updateUser(formData)
  }

  return (
    <S.Container>
      <h1>Minha conta</h1>

      <form onSubmit={handleSubmit}>
        <InputBox>
          <label>Nome</label>
          <input onChange={handleChange} type="text" value={name} name="name" />
        </InputBox>
        <InputBox>
          <label>Email</label>
          <input
            onChange={handleChange}
            type="text"
            value={email}
            name="email"
          />
        </InputBox>
        <button type="submit" className="btn-submit">Editar</button>
      </form>
    </S.Container>
  )
}

export default Profile
