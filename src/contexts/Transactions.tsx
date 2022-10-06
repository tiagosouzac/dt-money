import { createContext, ReactNode, useEffect, useState } from 'react'

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
    const url = new URL('http://localhost:3000/transactions')

    if (query) {
      url.searchParams.append('q', query)
    }

    const response = await fetch(url)
    const data = await response.json()

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
