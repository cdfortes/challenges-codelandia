import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { ListingGrid } from './components/ListingGrid'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Header />
      <ListingGrid />
    </ThemeProvider>
  )
}
