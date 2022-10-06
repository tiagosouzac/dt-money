import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    padding: 1rem;
    border: 0;
    border-radius: 6px;
    background-color: ${({ theme }) => theme['gray-900']};
    color: ${({ theme }) => theme['gray-300']};

    &::placeholder {
      color: ${({ theme }) => theme['gray-500']};
    }
  }

  button {
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme['green-300']};
    border-radius: 6px;
    background-color: transparent;
    color: ${({ theme }) => theme['green-300']};
    font-weight: 700;
    cursor: pointer;
    transition: border-color 0.2s, background-color 0.2s, color 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      border-color: ${({ theme }) => theme['green-500']};
      background-color: ${({ theme }) => theme['green-500']};
      color: ${({ theme }) => theme.white};
    }
  }
`
