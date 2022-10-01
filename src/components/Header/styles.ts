import styled from 'styled-components'

export const Container = styled.header`
  padding: 2.5rem 0 7.5rem;
  background: ${({ theme }) => theme['gray-900']};
`

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  padding: 0 1.5rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewTransactionButton = styled.button`
  height: 50px;
  padding: 0 1.25rem;
  border: 0;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme.white};
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme['green-700']};
  }
`
