import styled from 'styled-components'

export const TopSide = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr;
  gap: 4rem;

  @media screen and (max-width: 1400px) {
    display: flex;
    flex-direction: column;
  }

  .d-flex {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
`

export const BottomSide = styled.div`
  /* display: grid;
  grid-template-columns: 4fr 2fr; */
  gap: 4rem;
  margin-top: 3.2rem;

  @media screen and (max-width: 1400px) {
    display: flex;
    flex-direction: column;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 575px) {
      align-items: flex-start;
      flex-direction: column;
      gap: 0.8rem;
    }

    a {
      color: ${({ theme }) => theme.colors.white};
      font-size: 2rem;
    }
  }

  .chart {
    height: 25rem;
    background: ${({ theme }) => theme.colors.boxColor};
    border-radius: 0.8rem;
    max-width: 42rem;
  }
`
