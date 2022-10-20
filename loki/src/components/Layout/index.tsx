import { Clock, Star } from 'phosphor-react'
import {
  Main,
  ContentContainer,
  Content,
  InfoContainer,
  ButtonWrapper,
  StarWrapper
} from './styles'

function Layout() {
  return (
    <Main>
      <h3>ESTÁ DISPONÍVEL AGORA!</h3>
      <h1>LOKI</h1>
      <ContentContainer>
        <img src="./capa.png" alt="capa da serie Loki" />
        <Content>
          <p>
            Em “Loki” da Marvel Studios, o vilão mercurial Loki (Tom Hiddleston)
            retoma seu papel como o Deus do Mal em uma nova série que ocorre
            após os eventos de “Vingadores: Endgame”.{' '}
          </p>
          <InfoContainer>
            <span>
              <Clock size={30} /> 51min
            </span>
            <StarWrapper>
              <Star size={40} weight="fill" />
              <Star size={40} weight="fill" />
              <Star size={40} weight="fill" />
              <Star size={40} weight="fill" />
              <Star size={40} weight="duotone" />
            </StarWrapper>
            <span>2021</span>
          </InfoContainer>
          <ButtonWrapper>
            <a href="http://" className="blue">
              ASSISTIR AGORA
            </a>
            <a href="http://">TRAILER</a>
          </ButtonWrapper>
        </Content>
      </ContentContainer>
    </Main>
  )
}

export default Layout
