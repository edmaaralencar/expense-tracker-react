import styled from 'styled-components'

export const Container = styled.header`
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;

  background-color: ${props => props.theme.colors.contentColor};

  border-bottom: 2px solid #313131;

  @media screen and (max-width: 850px) {
    padding: 2rem;
  }
`

export const HeaderLogo = styled.div`
  display: flex;
  gap: 1.5rem;

  img {
    @media (max-width: 490px) {
      display: none;
    }
  }

  .menu {
    cursor: pointer;
    @media screen and (min-width: 800px) {
      display: none;
    }
  }
`

export const HeaderPerfil = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 380px) {
    gap: 1rem;
  }

  position: relative;

  p {
    color: #ededed;
    font-size: 2rem;
    font-weight: 500;

    @media (max-width: 380px) {
      display: none;
    }
  }

  button {
    background-color: transparent;
    border: 0;
  }

  .dropdown {
    position: absolute;
    width: 100%;
    background-color: ${props => props.theme.colors.boxColor};
    color: #ffffff;
    font-size: 2.4rem;
    top: 6rem;
    border-radius: 5px;
    padding: 1rem;
  }
`

export const HeaderImg = styled.img``
