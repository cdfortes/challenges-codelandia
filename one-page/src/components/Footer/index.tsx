import { FooterWrapper, FormContainer } from './styles'
export function Footer() {
  return (
    <FooterWrapper>
      <FormContainer>
        <h3>Entre em contato</h3>
        <form action="">
          <input type="text" name="name" id="name" placeholder="Nome" />
          <input type="email" name="email" id="email" placeholder="E-mail" />
          <input type="text" name="phone" id="phone" placeholder="Telefone" />
          <textarea placeholder="Messagem" />
          <input type="submit" name="submit" id="submit" />
        </form>
      </FormContainer>
    </FooterWrapper>
  )
}
