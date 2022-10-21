import { HeaderContainer } from './styles'

import Logo from '../../assets/logo.svg'
import Share from '../../assets/share.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo Valorant" />
      <h2>Riot Games</h2>
      <img src={Share} />
    </HeaderContainer>
  )
}
