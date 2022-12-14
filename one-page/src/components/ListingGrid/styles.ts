import styled from 'styled-components'
import { Container } from '../../styles/global'

export const ListingGridContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 11.1rem;
  margin: 15rem auto;
  @media (max-width: 41.4rem) {
    padding: 0 2rem;
    grid-template-columns: 1fr;
  }
`
