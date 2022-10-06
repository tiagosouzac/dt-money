import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { Container } from './styles'
import { MagnifyingGlass } from 'phosphor-react'

const SEARCH_FORM_SCHEMA = zod.object({
  query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof SEARCH_FORM_SCHEMA>

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(SEARCH_FORM_SCHEMA),
  })

  const handleSearchTransactions = async (data: SearchFormInputs) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log(data)
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
