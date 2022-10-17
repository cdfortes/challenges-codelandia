import styled from 'styled-components'
import { Container } from '../../styles/global'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme['purple-light']};
  padding: 2rem;
`

export const HeaderContentWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 7.7rem;
  padding-bottom: 12.325rem;
  @media (max-width: 414px) {
    flex-direction: column;
    gap: 11.4rem;
  }
`

export const TextContent = styled.div`
  max-width: 38.9rem;
  margin-top: 4.05rem;

  h1 {
    font-size: ${(props) => props.theme['font-sizes'].xl};
    max-width: 34.9rem;
    line-height: 1.36;
    margin-bottom: 1.75rem;
  }

  p {
    font-size: ${(props) => props.theme['font-sizes'].md};
    line-height: 1.67;
    margin-bottom: 4.5rem;
  }

  a {
    background-color: ${(props) => props.theme.purple};
    box-shadow: 0px 5px 5px rgba(23, 23, 23, 0.1);
    border-radius: 5px;
    color: ${(props) => props.theme.white};
    font-size: ${(props) => props.theme['font-sizes'].md2};
    line-height: 1.2;
    padding: 1.4rem 5rem;
  }
`

export const ImageContent = styled.img`
  max-width: 50rem;
  width: 100%;
`
