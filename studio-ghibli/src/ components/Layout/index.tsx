import {
  FacebookLogo,
  InstagramLogo,
  Play,
  TwitterLogo,
  YoutubeLogo
} from 'phosphor-react'
import { Illustration } from '../Illustation'
import { Logo } from '../Logo'
import {
  BrandingPanel,
  Button,
  HeroContainer,
  HeroContentArea,
  LayoutWrapper,
  SocialWrapper
} from './styles'

export function Layout() {
  return (
    <LayoutWrapper>
      <BrandingPanel>
        <Logo />
        <SocialWrapper>
          <FacebookLogo size={24} weight={'thin'} />
          <InstagramLogo size={24} weight={'thin'} />
          <TwitterLogo size={24} weight={'thin'} />
          <YoutubeLogo size={24} weight={'thin'} />
        </SocialWrapper>
      </BrandingPanel>
      <HeroContainer>
        <HeroContentArea>
          <h3>HAYAO MIYAZAKI</h3>
          <h1>
            A VIAGEM <br />
            DE CHIHIRO
          </h1>
          <p>
            Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que
            a desobedecem são transformados em animais.
          </p>
          <span className="button-container">
            <Button href="http://" bgColor="#628E75">
              <span>
                <Play />
                Assistir agora
              </span>
            </Button>
            <Button href="http://">
              <span>assista o trailer</span>
            </Button>
          </span>
        </HeroContentArea>
        <Illustration />
      </HeroContainer>
    </LayoutWrapper>
  )
}
