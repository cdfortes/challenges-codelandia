import { ThemeProvider } from 'styled-components'
import Layout from './components/Layout'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Layout />
    </ThemeProvider>
  )
}
