import { Heart } from 'phosphor-react'
import { CardBody, CardContainer, CardHeader } from './styles'

interface NewsProps {
  title: string
  body: string
  date: string
}

export function NewsCard({ title, body, date }: NewsProps) {
  return (
    <CardContainer>
      <CardHeader>
        <span>{date}</span>
        <Heart size={25} weight="thin" />
      </CardHeader>
      <CardBody>
        <h3>{title}</h3>
        <p>{body}</p>
      </CardBody>
    </CardContainer>
  )
}
