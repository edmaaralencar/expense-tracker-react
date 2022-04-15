import styled from 'styled-components'

export const Container = styled.section`
  max-width: 72rem;
  width: 100%;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.contentColor};
  padding: 6rem;
  border-radius: 0.8rem;

  @media (max-width: 768px) {
    margin: 0 2rem;
  }

  @media (max-width: 570px) {
    padding: 1rem 0;
  }

  h1 {
    font-size: 4.8rem;
    color: #dedede;
    font-weight: 500;
    text-align: center;

    @media (max-width: 550px) {
      font-size: 3.2rem;
    }
  }
`
