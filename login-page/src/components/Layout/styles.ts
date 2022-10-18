import styled from 'styled-components'

export const LayoutContainer = styled.main`
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  height: 100vh;
`

export const IllustrationContainer = styled.section`
  background-color: ${(props) => props.theme['white-200']};
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 40rem;
  }
`

export const FormContainer = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  form {
    margin: 4rem auto;
    width: 100%;
    max-width: 34.9rem;
  }
`

export const RememberContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 0;
  margin: 2.6rem auto;

  span {
    width: 50%;
    input[type='radio'] {
      background: ${(props) => props.theme['white-200']};
      border: 1px solid ${(props) => props.theme['gray-200']};
      width: 1.6rem;
      height: 1.6rem;
      margin-right: 1.1rem;
    }

    label {
      font-size: 14px;
    }
  }
  a {
    color: ${(props) => props.theme['purple-light']};
  }
`

interface ButtonProps {
  color: string
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: ${(props) => props.theme['font-sizes'].sm};
    margin-bottom: 1.1rem;
  }

  input {
    border: 1px solid ${(props) => props.theme['gray-200']};
    border-radius: 5px;
    padding: 1.7rem 2rem;
    margin-bottom: 1.1rem;

    ::placeholder {
      font-size: 14px;
    }
  }
`
export const Button = styled.input<ButtonProps>`
  width: 100%;
  background: ${(props) => props.color};
  color: ${(props) => props.theme.white};
  font-weight: 700;
  border-radius: 5px;
  padding: 1.5rem;
  text-align: center;

  border: none;
  box-shadow: none;
  margin: 0.75rem auto;

  :hover {
    cursor: pointer;
  }
`

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 34.9rem;
  margin: 0 auto;
  width: 100%;
  h1 {
    font-size: ${(props) => props.theme['font-sizes'].xl};
    line-height: 1.27;
    font-weight: 700;
  }

  h2 {
    font-size: ${(props) => props.theme['font-sizes'].sm};
    line-height: 1.25;
    font-weight: 400;
    margin-bottom: 0.07rem;
  }
`
