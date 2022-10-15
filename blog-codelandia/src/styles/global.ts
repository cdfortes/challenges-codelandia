import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple-700']};
  }
  a{
    text-decoration: none ;
    cursor:pointer ;
  }
  html {
    font-size: 62.5%;
  }
  body {
    background: ${(props) => props.theme['white-200']};
    color: ${(props) => props.theme['gray-400']};
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: ${(props) => props.theme['font-family']};
    font-weight: 400;
    font-size: 1.6rem;
  }
  h1, h2, h3, h4{
    font-family: ${(props) => props.theme['font-family']};
  }

  main{
    max-width: ${(props) => props.theme['container-width']};
    margin: 10rem auto ;
  }
`
