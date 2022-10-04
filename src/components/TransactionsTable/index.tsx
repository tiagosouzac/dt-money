import { useEffect, useState } from 'react'
import { SearchForm } from '../SearchForm'
import { Container, PriceHighlight, Table } from './styles'

type Transaction = {
  id: number
  type: 'income' | 'outcome'
  category: string
  description: string
  price: number
  createdAt: string
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const loadTransactions = async () => {
    const response = await fetch('http://localhost:3000/transactions')
    const data = await response.json()

    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <Container>
      <SearchForm />

      <Table>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.description}</td>
              <td>
                <PriceHighlight variant={transaction.type}>
                  {transaction.price}
                </PriceHighlight>
              </td>
              <td>{transaction.category}</td>
              <td>{transaction.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}
