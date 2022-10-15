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

export const Search = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.2);
  width: 100%;
  max-width: ${(props) => props.theme['container-width']};
  margin: 7.3rem auto;
  align-items: center;
  gap: 1.7rem;
  padding: 1.7rem 1.8rem 1.7rem 1.7rem;
  border-radius: 0.5rem;
  :focus-within {
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple-700']};
  }

  svg {
    color: ${(props) => props.theme.white};
  }

  input {
    width: 100%;
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.white};

    ::placeholder {
      font-family: 'Inter', sans-serif;
      font-size: ${(props) => props.theme['font-sizes'].md};
      font-weight: 500;
      color: ${(props) => props.theme.white};
    }

    :focus {
      outline: none;
      box-shadow: none;
    }
  }
`
