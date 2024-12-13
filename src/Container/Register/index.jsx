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
import { useNavigate } from "react-router-dom";

export function Register() {
    const navigate = useNavigate();
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


    // Função para redirecionar ao clicar no botão "Register"
    const handleRegisterClick = () => {
      navigate("/");
    };

    // Função para redirecionar ao clicar no botão "infos"
    const handleRegisterClickNext = () => {
      navigate("/infos");
    };

    
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

          <Button type="submit" onClick={handleRegisterClickNext}>Next</Button>

          <ReCAPTCHA className="ReCAPTCHA"
            sitekey="6LdzLpQqAAAAAJttPibKZLKWDtPwdhBjwg5Mlht9" // Substitua pela sua Site Key
            onChange={handleCaptchaChange}
          />
        </Form>
      </Container>
      <ContainerBanner>
        <div>
          <h1>Register on Blockbit Hub</h1>
          <button onClick={handleRegisterClick}>Login</button>
        </div>
      </ContainerBanner>
    </MainDiv>
  )
}

export default Register
