import { Card } from '../Card'
import { ListingGridContainer } from './styles'

const content = [
  {
    color: '#FF6363',
    title: 'Title do card',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.'
  },
  {
    color: '#63ECFF',
    title: 'Title do card',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.'
  },
  {
    color: '#F363FF',
    title: 'Title do card',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.'
  },
  {
    color: '#63FF73',
    title: 'Title do card',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.'
  },
  {
    color: '#FFDD63',
    title: 'Title do card',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.'
  },
  {
    color: '#6C63FF',
    title: 'Title do card',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.'
  }
]

export function ListingGrid() {
  return (
    <ListingGridContainer>
      {content.map(({ color }) => (
        <Card key={color} color={color} />
      ))}
    </ListingGridContainer>
  )
}
