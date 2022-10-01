import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { Close, Content, Overlay } from './styles'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <button type="submit">Cadastrar</button>
        </form>

        <Close>
          <X size={24} />
        </Close>
      </Content>
    </Dialog.Portal>
  )
}
