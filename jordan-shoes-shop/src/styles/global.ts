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
    background: ${(props) => props.theme['white']};
    color: ${(props) => props.theme['gray-900']};
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
    width: 100%;

    margin: 10rem auto ;
    padding-left: 2rem ;
    padding-right: 2rem ;
  }
`

export const Container = styled.div`
  max-width: 123.7rem;
  margin: auto;
`
