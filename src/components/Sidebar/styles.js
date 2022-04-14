import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

export const Container = styled.div`
  height: calc(100vh - 8rem);
  width: 23rem;
  background-color: #171717;
  position: fixed;
  transition: all 0.3s ease 0s;
  border: 2px solid #313131;
  border-top: none;
  z-index: 10;

  @media (max-width: 800px) {
    left: -100%;
  }
  &.active {
    left: 0;
  }
`

export const NavList = styled.nav`
  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

export const NavAnchor = styled(NavLink)`
  width: 100%;
  padding: 1.8rem 2.5rem;
  color: #a7a8ad;
  font-size: 2rem;
  text-decoration: none;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  svg {
    width: 2.5rem;
    height: 2.5rem;

    &.active {
      fill: '#e1e3ec';
    }
  }

  &.active {
    background-color: #222223;
    color: #e1e3ec;
    position: relative;
    &::after {
      content: '';
      width: 3px;
      background: #e1e3ec;
      top: 0;
      bottom: 0;
      left: -2px;
      position: absolute;
    }
  }
  img.invert {
    filter: invert(100%);
  }
`
