import { SearchContainer } from './styles'
import { MagnifyingGlass } from 'phosphor-react'
import { ChangeEvent, useState } from 'react'
export function Search() {
  const [input, setInput] = useState('')

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value)
    setInput(e.currentTarget.value)
  }
  return (
    <SearchContainer>
      <MagnifyingGlass size={30} weight="thin" />
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Pesquisar no blog"
        onChange={handleInput}
        value={input}
      />
    </SearchContainer>
  )
}
