import styled from 'styled-components'

export const CardContainer = styled.section`
  min-height: 195px;
  max-width: ${(props) => props.theme['container-width']};
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(19, 19, 31, 0.05);
  border-radius: 5px;
  padding: 2.4rem;
  margin: 5rem auto;
  :hover {
    box-shadow: 0 0 0 2px ${(props) => props.theme['blue-500']};
    cursor: pointer;
  }
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: ${(props) => props.theme['font-sizes'].sm};
    color: ${(props) => props.theme['gray-400']};
    font-weight: normal;
  }

  svg {
    color: ${(props) => props.theme['purple-700']};
    &:hover {
      path {
        fill: ${(props) => props.theme['purple-700']};
      }
    }
  }
`
export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.2rem;

  h3 {
    font-size: ${(props) => props.theme['font-sizes'].xl};
    color: ${(props) => props.theme['gray-900']};
    margin-bottom: 0.8rem;
  }

  p {
    font-size: ${(props) => props.theme['font-sizes'].md};
    color: ${(props) => props.theme['gray-400']};
    line-height: 1.7;
  }
`
