import styled from 'styled-components'

export const Container = styled.section`
  max-width: 100rem;

  form {
    margin-top: 3.2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 3.2rem;

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
    }
  }
`
