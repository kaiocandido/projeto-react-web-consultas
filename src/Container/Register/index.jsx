import { useState } from "react"
import {
  Button,
  Container,
  ContainerBanner,
  Form,
  InputContainer,
  Logo,
  MainDiv,
  Text,
} from "./styles";
import LogoBlack from "../../assets/logo-blockbit@2x 1.png"
import ReCAPTCHA from "react-google-recaptcha"

export function Register() {
    const [captchaValue, setCaptchaValue] = useState(null)

    // Função para lidar com a mudança do valor do CAPTCHA
    const handleCaptchaChange = (value) => {
      console.log("Captcha value:", value)
      setCaptchaValue(value)
    };
  
    // Função para enviar o formulário
    const handleSubmit = (e) => {
      e.preventDefault()

      if (!captchaValue) {
        alert("Por favor, resolva o CAPTCHA.")
        return;
      }
  
      alert("Formulário enviado com sucesso!")
      // Se tivesse backend, você enviaria o token de captcha para validação.
    }

  return (
    <MainDiv>
      <Container>
        <Logo>
          <img src={LogoBlack} alt="Logo Blockbit Hub" />
        </Logo>
        <Text>
          <p>Register in Hub</p>
        </Text>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <label>E-mail</label>
            <input type="email" placeholder="E-mail" />
          </InputContainer>
          <InputContainer>
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </InputContainer>
          <InputContainer>
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm Password" />
          </InputContainer>

          <Button type="submit">Next</Button>

          <ReCAPTCHA className="ReCAPTCHA"
            sitekey="6LdzLpQqAAAAAJttPibKZLKWDtPwdhBjwg5Mlht9" // Substitua pela sua Site Key
            onChange={handleCaptchaChange}
          />
        </Form>
      </Container>
      <ContainerBanner>
        <div>
          <h1>Register on Blockbit Hub</h1>
          <button>Login</button>
        </div>
      </ContainerBanner>
    </MainDiv>
  )
}

export default Register
