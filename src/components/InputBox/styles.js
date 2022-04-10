import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;

  label {
    color: #dadada;
    font-size: 2.4rem;
  }

  input {
    background-color: #3c3c3c;
    border: 0;
    border-radius: 0.5rem;
    font-size: 1.8rem;
    color: #ffffff;
    padding: 1.6rem 1.4rem;
    
    &::placeholder {
      color: #a5a5a5;
    }
  }

  select {
    background-color: #3c3c3c;
    border: 0;
    border-radius: 0.5rem;
    font-size: 1.8rem;
    color: #a5a5a5;
    padding: 1.6rem 1.4rem;
  }
`
