import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 42rem;
  background: ${({ theme }) => theme.colors.boxColor};
  padding: 2.5rem;
  color: #dedede;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  /* height: 13.6rem; */
  border-radius: 0.8rem;

  span {
    font-size: 2.4rem;
    font-weight: 500;
  }

  @media screen and (max-width: 500px) {
    height: auto;
  }
`

export const SavingsBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  .btn-edit {
    background: transparent;
    width: auto;
    border: 0;
}
`

export const ContainerProgression = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 500px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 2rem;
  }
`

export const Bar = styled.div`
  width: 17.5rem;
  background-color: #353535;
  border-radius: 8px;
  height: 1.8rem;
  position: relative;
`

export const ProgressBar = styled.div`
  width: ${props => `${props.size}rem`};
  background-color: #dedede;
  position: absolute;
  border-radius: 8px;
  height: 1.8rem;
`

export const MoneyText = styled.div`
  .currentMoney {
    color: #dedede;
    font-size: 2.4rem;
    font-weight: bold;
  }
  .totalMoney {
    font-size: 1.6rem;
    color: #c6c6c6;
    margin-left: 0.3rem;
  }
`
