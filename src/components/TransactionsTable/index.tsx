import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/Transactions'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
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
                  {transaction.type === 'outcome' && '- '}
                  {priceFormatter.format(transaction.price)}
                </PriceHighlight>
              </td>
              <td>{transaction.category}</td>
              <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}
