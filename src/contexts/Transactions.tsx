import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../api'

type Transaction = {
  id: number
  type: 'income' | 'outcome'
  category: string
  description: string
  price: number
  createdAt: string
}

type CreateTransactionData = {
  type: 'income' | 'outcome'
  category: string
  description: string
  price: number
}

type ContextProps = {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionData) => Promise<void>
}

type ProviderProps = {
  children: ReactNode
}

export const TransactionsContext = createContext({} as ContextProps)

export function TransactionsProvider({ children }: ProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = useCallback(async (query?: string) => {
    const { data } = await api.get('/transactions', {
      params: {
        q: query,
        _sort: 'createdAt',
        _order: 'desc',
      },
    })

    setTransactions(data)
  }, [])

  const createTransaction = useCallback(async (data: CreateTransactionData) => {
    const { type, category, description, price } = data

    const { data: transactionCreated } = await api.post('/transactions', {
      type,
      category,
      description,
      price,
      createdAt: new Date(),
    })

    setTransactions((prev) => [...prev, transactionCreated])
  }, [])

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
