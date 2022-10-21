import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  justify-content: space-between;
  max-width: ${(props) => props.theme['container-width']};
  margin: 0 auto;

  > img {
    margin-right: -12rem;
  }
`

export const ContentContainer = styled.section`
  margin-top: 21rem;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: ${(props) => props.theme['font-sizes'].xl};
    line-height: 1.37;
    text-transform: uppercase;
    color: transparent;

    -webkit-text-stroke-color: #fff;
    -webkit-text-stroke-width: 2px;
  }
`

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-top: 4.2rem;
`

export const Card = styled.span`
  text-align: center;

  h3 {
    color: ${(props) => props.theme['red-light']};
  }
`

export const SocialMediaContainer = styled.div`
  display: flex;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-top: 23.6rem;
  max-width: 14.2rem;
`
