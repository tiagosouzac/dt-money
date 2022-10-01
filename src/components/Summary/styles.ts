import styled from 'styled-components'

type CardProps = {
  variant?: 'green'
}

export const Container = styled.section`
  width: 100%;
  max-width: 1120px;
  padding: 0 1.5rem;
  margin: 0 auto;
  margin-top: -5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`

export const Card = styled.div<CardProps>`
  padding: 2rem;
  border-radius: 6px;
  background-color: ${({ variant, theme }) =>
    variant === 'green' ? theme['green-700'] : theme['gray-600']};

  header {
    color: ${({ theme }) => theme['gray-300']};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  strong {
    margin-top: 1rem;
    font-size: 2rem;
    display: block;
  }
`
