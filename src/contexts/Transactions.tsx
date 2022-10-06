import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../api'

type Transaction = {
  id: number
  type: 'income' | 'outcome'
  category: string
  description: string
  price: number
  createdAt: string
}

type ContextProps = {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
}

type ProviderProps = {
  children: ReactNode
}

export const TransactionsContext = createContext({} as ContextProps)

export function TransactionsProvider({ children }: ProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = async (query?: string) => {
    const { data } = await api.get('/transactions', {
      params: {
        q: query,
      },
    })

    setTransactions(data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
