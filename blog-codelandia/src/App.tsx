import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { NewsCard } from './components/NewsCard'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <main>
        <NewsCard />
      </main>

      <GlobalStyle />
    </ThemeProvider>
  )
}
