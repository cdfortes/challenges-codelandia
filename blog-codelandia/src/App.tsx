import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { NewsCard } from './components/NewsCard'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme'

import { news } from './data/news'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <main>
        {news.map(({ id, body, title, date }) => (
          <NewsCard key={id} body={body} title={title} date={date} />
        ))}
      </main>

      <GlobalStyle />
    </ThemeProvider>
  )
}
