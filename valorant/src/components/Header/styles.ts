import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: ${(props) => props.theme['container-width']};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.8rem 0;
`
