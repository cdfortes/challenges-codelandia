import styled from 'styled-components'

export const LayoutWrapper = styled.header`
  max-width: ${(props) => props.theme['container-width']};
  margin: auto;
`

export const BrandingPanel = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-top: 4.1rem;
  align-items: center;
  svg:hover {
    cursor: pointer;

    circle,
    g > path,
    rect,
    path,
    polygon {
      stroke-width: 12px;
    }
  }

  @media (max-width: 41.4rem) {
    padding: 2rem;
  }
`

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  max-width: 18.3rem;

  svg:hover {
    cursor: pointer;

    circle,
    rect,
    path,
    polygon {
      stroke-width: 12px;
    }
  }
`

export const HeroContainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 7.6rem 0 16rem 0;

  svg.illustration {
    width: 100%;

    @keyframes right-to-left {
      0% {
        opacity: 0;
        transform: translateX(160px);
      }

      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }

    .chihiro-right {
      left: 220px;
      opacity: 0;
      animation: right-to-left 5s ease 1s infinite alternate;
    }

    @keyframes bottom-up {
      0% {
        opacity: 0;
        transform: translateY(200px);
      }

      50% {
        transform: translateY(-50px);
      }

      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @keyframes ping {
      0% {
        transform: translateY(0);
      }

      50% {
        transform: translateY(-50px);
      }

      100% {
        transform: translateY(0);
      }
    }

    .chihiro-left {
      animation: bottom-up 1s ease 0s forwards, ping 5s ease 2s infinite;
    }
  }

  @media (max-width: 41.4rem) {
    flex-direction: column-reverse;
    padding: 2rem;
    margin: 0;
  }
`

export const HeroContentArea = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 44.5rem;

  h2 {
    font-size: ${(props) => props.theme['font-sizes'].md};
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 1.4rem;
  }

  h1 {
    font-size: ${(props) => props.theme['font-sizes'].xl};
    font-weight: 900;
    line-height: 1.09;
    margin-bottom: 2.5rem;
  }

  p {
    font-size: ${(props) => props.theme['font-sizes'].sm};
    font-weight: 400;
    line-height: 1.8;
    margin-bottom: 4.6rem;
  }

  span.button-container {
    display: flex;
    gap: 2.4rem;
    @media (max-width: 41.4rem) {
      flex-direction: column;
      padding: 2rem;
    }
  }
`

type ButtonProps = {
  bgColor?: string
}

export const Button = styled.a<ButtonProps>`
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : 'transparent'};
  padding: 0.8rem 1.3rem;
  width: 100%;
  color: ${(props) => props.theme['white-200']};
  font-size: ${(props) => props.theme['font-sizes'].sm};
  font-weight: 500;
  line-height: 1.8;
  text-transform: uppercase;
  border: 2px solid
    ${(props) => (props.bgColor ? 'transparent' : props.theme.green)};
  transform: skew(-30deg);

  transition: all 0.3s linear;

  &:hover {
    background-color: ${(props) =>
      props.bgColor ? 'transparent' : props.theme.green};
    border: 2px solid ${(props) => props.theme['white-200']};
  }
  span {
    display: flex;
    transform: skew(30deg);
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`
