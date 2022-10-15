import { Search } from '../Search'
import { HeaderWrapper, TopHeader } from './styles'

export function Header() {
  return (
    <HeaderWrapper>
      <TopHeader>
        <h1>Codelândia</h1>
        <h2>blog</h2>
      </TopHeader>
      <Search />
    </HeaderWrapper>
  )
}
