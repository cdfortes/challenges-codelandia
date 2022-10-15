import { HeaderWrapper, Search, TopHeader } from './styles'
import { MagnifyingGlass } from 'phosphor-react'
export function Header() {
  return (
    <HeaderWrapper>
      <TopHeader>
        <h1>Codelândia</h1>
        <h2>Blog</h2>
      </TopHeader>
      <Search>
        <MagnifyingGlass size={30} weight="thin" />
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Pesquisar no blog"
        />
      </Search>
    </HeaderWrapper>
  )
}
