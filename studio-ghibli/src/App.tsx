import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <h1>Studio Ghibli</h1>
    </ThemeProvider>
  )
}
