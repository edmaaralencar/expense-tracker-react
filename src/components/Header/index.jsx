import { useState } from 'react'
import { FiMenu, FiChevronDown } from 'react-icons/fi'

import { Container, HeaderLogo, HeaderPerfil } from './styles'

import logoImg from '../../assets/logo.svg'
import profileImg from '../../assets/profile.png'
import { useAppContext } from '../../context/AppContext'

const Header = () => {
  const { toggleSidebar, logoutUser, user } = useAppContext()
  const [openDropdown, setOpenDropdown] = useState(false)

  const handleDropdown = () => setOpenDropdown(!openDropdown)

  return (
    <Container>
      <HeaderLogo>
        <FiMenu
          onClick={() => toggleSidebar()}
          className="menu"
          size={35}
          color="#FFFFFF"
        />
        <img src={logoImg} alt="Logo" />
      </HeaderLogo>

      <HeaderPerfil>
        <img src={profileImg} alt="Imagem de perfil" />
        <p>{user?.name}</p>
        <button onClick={() => handleDropdown()}>
          <FiChevronDown size={30} color="#FFFFFF" />
        </button>

        {openDropdown && (
          <button onClick={() => logoutUser()} className="dropdown">
            Sair
          </button>
        )}
      </HeaderPerfil>
    </Container>
  )
}

export default Header
