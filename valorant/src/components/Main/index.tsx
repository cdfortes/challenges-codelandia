import {
  ContentContainer,
  CardsContainer,
  MainContainer,
  SocialMediaContainer,
  Card
} from './styles'

import Art from '../../assets/art.svg'
import Omen from '../../assets/Omen.svg'
import Sage from '../../assets/Sage.svg'
import Sova from '../../assets/Sova.svg'
import { FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react'

export function Main() {
  return (
    <MainContainer>
      <ContentContainer>
        <h1>Valorant</h1>
        <CardsContainer>
          <Card>
            <img src={Omen} />
            <h3>Omen</h3>
          </Card>
          <Card>
            <img src={Sage} />
            <h3>Sage</h3>
          </Card>
          <Card>
            <img src={Sova} />
            <h3>Sova</h3>
          </Card>
        </CardsContainer>
        <SocialMediaContainer>
          <InstagramLogo weight="thin" size={24} />
          <TwitterLogo weight="thin" size={24} />
          <FacebookLogo weight="thin" size={24} />
        </SocialMediaContainer>
      </ContentContainer>
      <img src={Art} />
    </MainContainer>
  )
}
