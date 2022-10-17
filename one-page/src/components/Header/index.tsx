import {
  HeaderContainer,
  HeaderContentWrapper,
  ImageContent,
  TextContent
} from './styles'

import Image from '../../assets/imagem.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContentWrapper>
        <TextContent>
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu
            massa sit amet augue consectetur ullamcorper non ac massa.
          </p>

          <a href="#">Botao</a>
        </TextContent>

        <ImageContent srcSet={Image} />
      </HeaderContentWrapper>
    </HeaderContainer>
  )
}
