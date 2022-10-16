import styled from 'styled-components'

import { Container } from '../../styles/global'

export const ListingContainer = styled(Container)`
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-top: 5.8rem;
  margin-bottom: 10rem;

  h3 {
    font-size: ${(props) => props.theme['font-sizes'].xl};
    line-height: 1.9;
    font-weight: 600;
    color: ${(props) => props.theme['gray-900']};
    @media (max-width: 414px) {
      font-size: ${(props) => props.theme['font-sizes'].xd};
    }
  }

  p {
    font-size: ${(props) => props.theme['font-sizes'].md};
    line-height: 1.9;
    font-weight: 500;
    color: ${(props) => props.theme['gray-400']};

    @media (max-width: 414px) {
      font-size: ${(props) => props.theme['font-sizes'].sm};
    }
  }
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1.3rem;
  margin-top: 6rem;

  @media (max-width: 414px) {
    grid-template-columns: 1fr;
  }

  img {
    background-color: ${(props) => props.theme['white-200']};
    padding: 7.5rem 2.6rem;
    border-top: 1px solid transparent;
    transition: all 0.3s linear;
    width: 100%;

    :hover {
      border-top: 1px solid ${(props) => props.theme['gray-900']};
      cursor: pointer;

      transform: scale(1.02);
    }
  }
`
