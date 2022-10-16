import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
`

export const TopHeader = styled.div`
  background-color: ${(props) => props.theme['gray-900']};
  width: 100%;
  height: 6rem;
  padding-left: 2rem;
  padding-right: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  p {
    color: ${(props) => props.theme['white']};
    font-weight: 500;
  }
`

export const Branding = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 6rem;

  h3 {
    font-size: ${(props) => props.theme['font-sizes'].xd};
    font-weight: 600;
  }
`

export const Hero = styled.div`
  background: url('./bg-hero--web.png') no-repeat center center;
  background-size: cover;
  width: 100%;
  padding: 18.7rem 2rem;

  h2 {
    font-size: ${(props) => props.theme['font-sizes'].xl};
    font-weight: 700;
    color: ${(props) => props.theme.white};
    margin-bottom: 1.9rem;
    @media (max-width: 414px) {
      font-size: ${(props) => props.theme['font-sizes'].xd};
    }
  }

  p {
    font-size: ${(props) => props.theme['font-sizes'].md};
    font-weight: 600;
    color: ${(props) => props.theme.white};
    max-width: 46rem;
    line-height: 1.9;
    @media (max-width: 414px) {
      font-size: ${(props) => props.theme['font-sizes'].sm};
    }
  }

  @media (max-width: 414px) {
    background: url('./bg-hero-mobile.png') no-repeat center center;
    background-size: cover;
    padding: 16.8rem 2rem;
  }
`
