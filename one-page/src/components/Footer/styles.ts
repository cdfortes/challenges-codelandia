import styled from 'styled-components'
import { Container } from '../../styles/global'

export const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme['purple-light']};
  padding: 8.5rem 2rem;
`

export const FormContainer = styled(Container)`
  h3 {
    margin-bottom: 6rem;
    font-size: ${(props) => props.theme['font-sizes'].xl};
    text-align: center;
  }
  form {
    max-width: 42rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: auto;

    input {
      background-color: ${(props) => props.theme['white']};
      box-shadow: none;
      border: none;
      outline: none;
      padding: 2.2rem 1.5rem;
      border-radius: 6px;
      font-size: ${(props) => props.theme['font-sizes'].md};
    }

    textarea {
      background-color: ${(props) => props.theme['white']};
      box-shadow: none;
      border: none;
      outline: none;
      padding: 2.2rem 1.5rem;
      border-radius: 6px;
      font-size: ${(props) => props.theme['font-sizes'].md};
      min-height: 16.5rem;
    }

    input[type='submit'] {
      background-color: ${(props) => props.theme.purple};
      box-shadow: 0px 5px 5px rgba(23, 23, 23, 0.1);
      border-radius: 5px;
      color: ${(props) => props.theme.white};
      font-size: ${(props) => props.theme['font-sizes'].md2};
      line-height: 1.2;
      padding: 1.4rem 5rem;
    }
  }
`
