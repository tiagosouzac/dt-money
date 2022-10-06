import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { Container } from './styles'
import { MagnifyingGlass } from 'phosphor-react'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/Transactions'

const SEARCH_FORM_SCHEMA = zod.object({
  query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof SEARCH_FORM_SCHEMA>

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionsContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(SEARCH_FORM_SCHEMA),
  })

  const handleSearchTransactions = async (data: SearchFormInputs) => {
    await fetchTransactions(data.query)
  }

  return (
    <Container onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </Container>
  )
}
