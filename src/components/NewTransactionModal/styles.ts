import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

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

    &:hover {
      background-color: ${({ theme }) => theme['green-700']};
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
