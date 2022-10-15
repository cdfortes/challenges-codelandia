import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  background: ${(props) => props.theme.gradient};
  height: 25rem;
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
`

export const TopHeader = styled.div`
  max-width: ${(props) => props.theme['container-width']};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding-top: 4.1rem;

  h1,
  h2 {
    font-size: ${(props) => props.theme['font-sizes'].xd};
    color: ${(props) => props.theme.white};
  }
`
