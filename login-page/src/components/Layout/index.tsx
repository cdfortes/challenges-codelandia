import {
  FormContainer,
  IllustrationContainer,
  LayoutContainer,
  RememberContainer,
  Button,
  InputContainer,
  HeadingContainer
} from './styles'

import Illustration from '../../assets/illustration.svg'

export function Layout() {
  return (
    <LayoutContainer>
      <IllustrationContainer>
        <img srcSet={Illustration} alt="person on a sqaure" />
      </IllustrationContainer>
      <FormContainer>
        <HeadingContainer>
          <h2>Bem vindo de volta</h2>
          <h1>Faça login na sua conta</h1>
        </HeadingContainer>
        <form action="">
          <InputContainer>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="cdfortes@gmail.com"
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*********"
              minLength={8}
              required
            />
          </InputContainer>
          <RememberContainer>
            <span>
              <input type="radio" name="remember" id="remeber" />
              <label htmlFor="remember">Lembre de mim </label>
            </span>

            <a href="#">Esqueceu sua senha? </a>
          </RememberContainer>
          <Button value="Entrar" color="#04C35C" />
          <Button color="#1A202C" value="Ou faça login com o Google " />
        </form>
      </FormContainer>
    </LayoutContainer>
  )
}
