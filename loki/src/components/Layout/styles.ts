import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: ${(props) => props.theme['container-width']};
  margin: 4.5rem auto;

  h2 {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: ${(props) => props.theme['font-sizes'].md};
    font-weight: 700;
    line-height: 1.2;
  }

  h1 {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: ${(props) => props.theme['font-sizes'].xl};
    font-weight: 700;
    line-height: 1.2;
    margin-top: 6.5rem;
    margin-bottom: 16.1rem;
  }
`

export const ContentContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 7.3rem;
  margin-bottom: 4.5rem;
`

export const Content = styled.div`
  p {
    font-size: ${(props) => props.theme['font-sizes'].md};
    font-weight: 400;
    line-height: 1.6;
    text-align: left;
  }
`

export const InfoContainer = styled.div`
  margin-top: 4.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 63rem;

  span {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    font-size: ${(props) => props.theme['font-sizes'].xd};
  }
`

export const StarWrapper = styled.span`
  gap: 0.9rem;
  color: ${(props) => props.theme.yellow};

  svg:last-child {
    color: rgba(255, 255, 255, 0.5);
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: left;
  margin-top: 5.2rem;
  gap: 2.1rem;

  a {
    background-color: ${(props) => props.theme.dark};
    color: ${(props) => props.theme.white};
    text-transform: uppercase;
    border: 1px solid ${(props) => props.theme.white};
    padding: 1.5rem 2.7rem;
    border-radius: 3px;

    &.blue {
      background-color: ${(props) => props.theme.blue};
      border: 1px solid transparent;
    }
  }
`
