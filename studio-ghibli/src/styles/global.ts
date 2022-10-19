import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a{
    text-decoration: none ;
    cursor:pointer ;
  }
  html {
    font-size: 62.5%;
  }
  body {
    background: ${(props) => props.theme.green};
    color: ${(props) => props.theme['white-200']};
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: ${(props) => props.theme['body-family']};
    font-weight: 400;
    font-size: 1.6rem;
  }
  h1, h2, h3, h4{
    font-family: ${(props) => props.theme['body-family']};
    color: ${(props) => props.theme['white-200']};
  }

  
`

export const Container = styled.div`
  max-width: ${(props) => props.theme['container-width']};
  margin: auto;
`
