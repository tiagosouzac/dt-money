import { TransactionsProvider } from './contexts/Transactions'
import { Transactions } from './pages/Transactions'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import theme from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
