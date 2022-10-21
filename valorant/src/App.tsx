import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import {  Main } from './components/Main'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Main />
    </ThemeProvider>
  )
}
