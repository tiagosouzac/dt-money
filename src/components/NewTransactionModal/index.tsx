import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/Transactions'
import * as zod from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'

import {
  Close,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'

import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

const NEW_TRANSACTION_FORM_SCHEMA = zod.object({
  type: zod.enum(['income', 'outcome']),
  category: zod.string(),
  description: zod.string(),
  price: zod.number(),
})

type NewTransactionFormInputs = zod.infer<typeof NEW_TRANSACTION_FORM_SCHEMA>

export function NewTransactionModal() {
  const { createTransaction } = useContext(TransactionsContext)

  const {
    register,
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(NEW_TRANSACTION_FORM_SCHEMA),
  })

  const handleCreateNewTransaction = async (data: NewTransactionFormInputs) => {
    await createTransaction(data)
    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <form action="" onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />

          <input
            type="number"
            placeholder="Preço"
            required
            {...register('price', { valueAsNumber: true })}
          />

          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />

          <Controller
            name="type"
            control={control}
            render={({ field: { value, onChange } }) => (
              <TransactionType value={value} onValueChange={onChange}>
                <TransactionTypeButton value="income" variant="income">
                  <ArrowCircleUp size={24} />
                  Entrada
                </TransactionTypeButton>

                <TransactionTypeButton value="outcome" variant="outcome">
                  <ArrowCircleDown size={24} />
                  Saída
                </TransactionTypeButton>
              </TransactionType>
            )}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>

        <Close>
          <X size={24} />
        </Close>
      </Content>
    </Dialog.Portal>
  )
}
