import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;  }

  body {
    background-color: ${props => props.theme.colors.backgroundColor};
  }

  html {
    font-size: 62.5%;
  }

  .container {
    display: grid;
    grid-template-columns: auto 1fr;

    margin-top: 10.5rem;

    @media (max-width: 850px) {
      margin-top: 8.5rem;
    }
  }

  button {
    cursor: pointer;
  }

  .dashboard-page {
    padding: 6rem;
    margin-left: 23rem;
    width: calc(100vw - 23rem);

    @media (max-width: 800px) {
        margin-left: 0;
        width: 100vw;
        padding: 5rem;
    }

    @media (max-width: 620px) {
        padding: 3rem;
    }
  }

  button {
    cursor: pointer;
  }

  .Toastify__toast-body div {
    font-size: 1.5rem;
  }

  h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 600;

    @media (max-width: 620px) {
      font-size: 3.2rem;
    }
  }

  h2 {
    font-size: 3.2rem;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
  }
`
