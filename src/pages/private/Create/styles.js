import styled from 'styled-components'

export const Container = styled.section`
  max-width: 100rem;

  form {
    margin-top: 3.2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 3.2rem;

    @media (max-width: 1000px) {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .category {
      grid-row: 2 / 3;
      grid-column: 1 / 3;

      @media (max-width: 1000px) {
        width: 100%;
      }
    }

    .total-amount {
      grid-row: 2 / 3;
      grid-column: 1 / 3;

      @media (max-width: 1000px) {
        width: 100%;
      }
    }

    @media (max-width: 980px) {
      grid-template-columns: 1fr;
    }

    .btn-submit {
      border-radius: 0.8rem;
      padding: 1.6rem 0;
      text-align: center;
      color: #e4e4e4;
      font-size: 2.1rem;
      border: 0;
      background-color: #12a454;
      width: 100%;
      order: 6;
    }

    a {
      border-radius: 0.8rem;
      padding: 1.6rem 0;
      text-align: center;
      color: #e4e4e4;
      font-size: 2.1rem;
      border: 0;
      background-color: #c82333;
      text-decoration: none;
      width: 100%;

      @media (max-width: 1000px) {
        order: 6;
      }
    }
  }
`

export const TypeButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  &.grid {
    grid-row: 3 / 4;
    grid-column: span 2;
    width: 100%;
  }

  @media (max-width: 350px) {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }
`

const colors = {
  green: '#115A32',
  red: '#781F2E'
}

export const TypeButton = styled.button`
  color: #ffffff;
  font-size: 1.8rem;
  height: 6.4rem;
  background: transparent;
  transition: background-color 0.2s;

  background-color: ${props =>
    props.isActive ? colors[props.activeColor] : 'transparent'};
  border: ${props => (props.isActive ? 'none' : '3px solid #3C3C3C')};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;
  border-radius: 0.5rem;
`
