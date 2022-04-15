import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;

  border-radius: 0.8rem;

  @media (max-width: 620px) {
    background-color: ${props => props.theme.colors.contentColor};
  }

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  button {
    width: 100%;
    background-color: ${props => props.theme.colors.green};
    padding: 1.6rem 0;
    text-align: center;
    color: #ffffff;
    font-size: 2.1rem;
    border: 0;
    border-radius: 0.5rem;
    margin-top: 4rem;

    @media (max-width: 550px) {
      font-size: 1.8rem;
    }
  }

  a {
    text-align: center;
    display: block;
    margin-top: 4rem;
    color: #dadada;
    font-size: 2.4rem;
    text-decoration: none;

    @media (max-width: 550px) {
      font-size: 1.8rem;
    }

    span {
      color: ${props => props.theme.colors.green};
    }
  }
`

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  label {
    color: #dadada;
    font-size: 2.4rem;

    @media (max-width: 550px) {
      font-size: 1.8rem;
    }
  }

  input {
    background-color: #3c3c3c;
    width: 100%;
    border: 0;
    border-radius: 0.5rem;
    padding: 1.6rem 2.4rem;
    font-size: 1.8rem;

    color: #dadada;

    &::placeholder {
      color: #a5a5a5;
    }

    @media (max-width: 550px) {
      font-size: 1.4rem;
    }
  }
`
