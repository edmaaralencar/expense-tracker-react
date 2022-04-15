import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  p {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.white};
    margin-top: 3.2rem;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 800px) and (max-width: 1000px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1.6rem;
    }

    @media (max-width: 720px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1.6rem;
    }

    a {
      border: 0;
      padding: 1.2rem 1.6rem;
      border-radius: 0.5rem;
      font-size: 2.4rem;
      display: flex;
      align-items: center;
      gap: 1.6rem;
      background-color: ${props => props.theme.colors.white};
      color: #000000;
      text-decoration: none;

      @media (max-width: 620px) {
        font-size: 1.8rem;
      }
    }
  }
`
