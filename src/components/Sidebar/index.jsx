import * as S from './styles'

import { FiHome, FiArrowUp, FiNavigation, FiUser } from 'react-icons/fi'
import { useAppContext } from '../../context/AppContext'

const Sidebar = () => {
  const { showSidebar, toggleSidebar } = useAppContext()

  return (
    <S.Container className={showSidebar ? 'active' : ''}>
      <S.NavList>
        <S.NavAnchor end={true} to="/" onClick={() => toggleSidebar()}>
          <FiHome size={35} color="#a7a8ad" />
          <span>Dashboard</span>
        </S.NavAnchor>

        <S.NavAnchor to="/transactions" onClick={() => toggleSidebar()}>
          <FiArrowUp size={35} color="#a7a8ad" />
          <span>Transações</span>
        </S.NavAnchor>

        <S.NavAnchor to="/savings" onClick={() => toggleSidebar()}>
          <FiNavigation size={35} color="#a7a8ad" />
          <span>Poupança</span>
        </S.NavAnchor>

        <S.NavAnchor to="/profile" onClick={() => toggleSidebar()}>
          <FiUser size={35} color="#a7a8ad" />
          <span>Minha Conta</span>
        </S.NavAnchor>
      </S.NavList>
    </S.Container>
  )
}

export default Sidebar
