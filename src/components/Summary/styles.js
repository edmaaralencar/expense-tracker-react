import styled from 'styled-components'

export const Container = styled.div`
  /* margin-top: 2.4rem; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media screen and (max-width: 960px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 580px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`

export const SummaryCard = styled.div`
  border-radius: 0.8rem;
  padding: 2.4rem;
  background-color: ${({ theme }) => theme.colors.boxColor}};

  h3 {
    margin-top: 3rem;
    font-size: 2.4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.white};
  }

  @media screen and (max-width: 960px) {
    &:last-child {
      grid-column: 1 / 3;
      grid-row: 2 / 3;
    }
  }

  @media screen and (max-width: 580px) {
    &:last-child {
      grid-column: 1 /2;
      grid-row: 2 /3;
    }
  }
`

export const SummaryText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 2.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
  }

  div {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background-color: #dedede;
  }
`
