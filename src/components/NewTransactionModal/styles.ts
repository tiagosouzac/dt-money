import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as Radio from '@radix-ui/react-radio-group'

type TransactionTypeButtonProps = {
  variant: 'income' | 'outcome'
}

export const Overlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  inset: 0;
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  padding: 2.5rem 3rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['gray-800']};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input {
    padding: 1rem;
    border: 0;
    border-radius: 6px;
    background-color: ${({ theme }) => theme['gray-900']};
    color: ${({ theme }) => theme['gray-300']};

    &::placeholder {
      color: ${({ theme }) => theme['gray-500']};
    }
  }

  button[type='submit'] {
    height: 58px;
    padding: 0 1.25rem;
    margin-top: 1.5rem;
    border: 0;
    border-radius: 6px;
    background-color: ${({ theme }) => theme['green-500']};
    color: ${({ theme }) => theme.white};
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.2s;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme['green-700']};
    }
  }
`

export const TransactionType = styled(Radio.Root)`
  margin-top: 0.5rem;
  display: flex;
  gap: 1rem;
`

export const TransactionTypeButton = styled(
  Radio.Item,
)<TransactionTypeButtonProps>`
  flex: 1;
  padding: 1rem;
  border: 0;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['gray-700']};
  color: ${({ theme }) => theme['gray-300']};
  transition: background-color 0.2s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${({ variant, theme }) =>
      variant === 'income' ? theme['green-300'] : theme['red-300']};
  }

  &[data-state='unchecked'] {
    background-color: ${({ theme }) => theme['gray-600']};
  }

  &[data-state='checked'] {
    background-color: ${({ variant, theme }) =>
      variant === 'income' ? theme['green-500'] : theme['red-500']};
    color: ${({ theme }) => theme.white};

    svg {
      color: ${({ theme }) => theme.white};
    }
  }
`

export const Close = styled(Dialog.Close)`
  border: 0;
  background-color: transparent;
  color: ${({ theme }) => theme['gray-500']};
  line-height: 0;
  cursor: pointer;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`
