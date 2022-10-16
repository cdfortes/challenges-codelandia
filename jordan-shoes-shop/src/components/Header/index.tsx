import { Container } from '../../styles/global'
import { Branding, HeaderContainer, TopHeader, Hero } from './styles'
export function Header() {
  return (
    <HeaderContainer>
      <TopHeader>
        <p>Ganhe R$ 10,00 de desconto no frete</p>
      </TopHeader>
      <Branding>
        <h3>JordanShoes</h3>
      </Branding>
      <Hero>
        <Container>
          <h2>A melhor loja de Jordan</h2>
          <p>
            O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e
            o jogador Michael Jordan.
          </p>
        </Container>
      </Hero>
    </HeaderContainer>
  )
}
