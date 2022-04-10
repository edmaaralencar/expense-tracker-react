import { Container } from './styles'

const AuthWrapper = ({ children, title }) => {
  return (
    <Container>
      <h1>{title}</h1>
      {children}
    </Container>
  )
}

export default AuthWrapper
