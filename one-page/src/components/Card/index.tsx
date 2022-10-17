import { CardBody, CardContainer, CardHeader } from './styles'

interface CardProps {
  color?: string
  title?: string
  content?: string
}
export function Card({
  color = 'red',
  title = 'Title do card',
  content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.'
}: CardProps) {
  return (
    <CardContainer>
      <CardHeader bgColor={color} />
      <CardBody>
        <h2>{title}</h2>
        <p>{content}</p>
      </CardBody>
    </CardContainer>
  )
}
