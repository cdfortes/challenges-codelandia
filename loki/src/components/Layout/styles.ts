import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: ${(props) => props.theme['container-width']};
  margin: 4.5rem auto;
  @media (max-width: 41.4rem) {
    margin-bottom: 0;
  }

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
    margin-bottom: 18.9rem;
    @media (max-width: 41.4rem) {
      margin-bottom: 29.8rem;
    }
  }
`

export const ContentContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 7.3rem;
  margin-bottom: 4.5rem;

  @media (max-width: 41.4rem) {
    align-items: bottom;
    margin-bottom: 0;
    img {
      display: none;
    }
  }
`

export const Content = styled.div`
  @media (max-width: 41.4rem) {
    display: flex;
    flex-direction: column;
    background: ${(props) => props.theme['dark-ligth']};
    border-radius: 20px 20px 0px 0px;
    padding: 0 1.5rem;
  }

  p {
    font-size: ${(props) => props.theme['font-sizes'].md};
    font-weight: 400;
    line-height: 1.6;
    text-align: left;
    order: 2;

    @media (max-width: 41.4rem) {
      margin-bottom: 2rem;
      font-size: ${(props) => props.theme['font-sizes'].sm};

      border-top: 1px solid rgba(196, 196, 196, 0.08);

      padding-top: 2rem;
    }
  }
`

export const InfoContainer = styled.div`
  margin-top: 4.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 63rem;

  @media (max-width: 41.4rem) {
    max-width: 100%;

    margin-top: -6rem;
  }

  span {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    font-size: ${(props) => props.theme['font-sizes'].xd};
    @media (max-width: 41.4rem) {
      font-size: ${(props) => props.theme['font-sizes'].sm};
      gap: 0.4rem;
      svg {
        width: 20px;
      }
    }
  }
`

export const StarWrapper = styled.span`
  gap: 0.9rem;
  color: ${(props) => props.theme.yellow};

  svg:last-child {
    color: rgba(255, 255, 255, 0.8);
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: left;
  margin-top: 5.2rem;
  gap: 2.1rem;

  @media (max-width: 41.4rem) {
    width: 100%;
    margin-bottom: 3rem;
  }

  a {
    background-color: ${(props) => props.theme.dark};
    color: ${(props) => props.theme.white};
    text-transform: uppercase;
    border: 1px solid ${(props) => props.theme.white};
    padding: 1.5rem 2.7rem;
    border-radius: 3px;
    font-size: ${(props) => props.theme['font-sizes'].xd};
    @media (max-width: 41.4rem) {
      width: 100%;
      font-size: ${(props) => props.theme['font-sizes'].sm};
      padding: 1.5rem 1.7rem;
    }

    &.blue {
      background-color: ${(props) => props.theme.blue};
      border: 1px solid transparent;
    }
  }
`
