import { ThemeProvider } from 'styled-components'
import { Transactions } from './pages/Transactions'
import { GlobalStyle } from './styles/global'
import theme from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Transactions />
    </ThemeProvider>
  )
}
