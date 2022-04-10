import styled from 'styled-components'

export const TableContainer = styled.div`
  margin-top: 3.5rem;

  @media screen and (max-width: 1040px) {
    overflow-x: scroll;
  }
`

export const TableItem = styled.div`
  border-bottom: 1px solid #c4c4c4;
  display: grid;
  gap: 2.4rem;
  grid-template-columns: auto 1fr 1fr 1fr 1fr auto;
  align-items: center;
  margin-bottom: 1.7rem;
  color: #ffffff;

  @media (max-width: 1040px) {
    width: 80rem;
  }

  span {
    margin-bottom: 1.6rem;
    font-size: 2rem;
  }

  .table-item-category {
    font-weight: bold;
  }

  .icon-container {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .table-item-icon {
    margin-bottom: 1.6rem;
  }

  .table-item-icon-trash {
    margin-bottom: 1.6rem;
    cursor: pointer;
  }
`
