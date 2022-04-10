import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100vh - 27rem);

  display: grid;
  place-items: center;

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .loading {
    width: 10rem;
    height: 10rem;
    border: 5px solid #829ab1;
    border-radius: 50%;
    border-top-color: #052b63;
    animation: spinner 2s linear infinite;
    margin: 0 auto;
  }
`
