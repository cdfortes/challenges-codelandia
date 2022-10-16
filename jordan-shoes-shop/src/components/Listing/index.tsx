import { GridContainer, ListingContainer } from './styles'

import joardan01 from '../../assets/air-jordan-1-high-zoom-cmft-tropical-twist-1-400.svg'
import joardan02 from '../../assets/air-jordan-1-mid-black-noble-red-w-1-1000.svg'
import joardan03 from '../../assets/air-jordan-1-mid-bright-citrus-1-1000 1.svg'
import joardan04 from '../../assets/air-jordan-1-mid-carbon-fiber-1-1000 1.svg'
import joardan05 from '../../assets/air-jordan-1-mid-dutch-green-1-400.svg'
import joardan06 from '../../assets/air-jordan-1-mid-grey-camo-1-1000 1.svg'
import joardan07 from '../../assets/air-jordan-1-mid-light-smoke-grey-gs-1-1000.svg'
import joardan08 from '../../assets/air-jordan-1-retro-high-court-purple-w-1-400.svg'

function Listing() {
  return (
    <ListingContainer>
      <h3>Destaques</h3>
      <p>
        Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.
      </p>
      <GridContainer>
        <img src={joardan01} alt="Jordan Image" />
        <img src={joardan02} alt="Jordan Image" />
        <img src={joardan03} alt="Jordan Image" />
        <img src={joardan04} alt="Jordan Image" />
        <img src={joardan05} alt="Jordan Image" />
        <img src={joardan06} alt="Jordan Image" />
        <img src={joardan07} alt="Jordan Image" />
        <img src={joardan08} alt="Jordan Image" />
      </GridContainer>
    </ListingContainer>
  )
}

export default Listing
