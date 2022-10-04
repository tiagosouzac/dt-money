import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/Transactions'
import { SearchForm } from '../SearchForm'

import { Container, PriceHighlight, Table } from './styles'

export function TransactionsTable() {
  const { transactions } = useContext(TransactionsContext)

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
