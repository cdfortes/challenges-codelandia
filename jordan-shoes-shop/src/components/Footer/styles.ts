import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['gray-900']};
  width: 100%;
  height: 6rem;

  span {
    color: ${(props) => props.theme['white']};
    font-size: ${(props) => props.theme['font-sizes'].md};
    line-height: 1.9;
    font-weight: 500;
  }
`
