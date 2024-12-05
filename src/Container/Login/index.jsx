import { Button, Container, ContainerBanner, ForgotPassword, Form, InputContainer,Logo, MainDiv, Text } from "./styles"
import LogoBlack from "../../assets/logo-blockbit@2x 1.png"

export function Login(){
    return(

        <MainDiv>
            <Container>
                <Logo>
                    <img src={LogoBlack} alt="Logo Blockbit Hub"></img>
                </Logo>
                <Text>
                    <p>Login in Hub</p>
                </Text>
                <Form>
                    <InputContainer>
                        <label>E-MAIL</label>
                        <input type="email"  placeholder="E-mail" />
                    </InputContainer>
                    <InputContainer>
                        <label>PASSWORD</label>
                        <input type="password" placeholder="Password" />
                    </InputContainer>
                    <Button type="submit">Log in</Button>

                    <ForgotPassword>
                        <a>Forgot Password</a>
                    </ForgotPassword>
                </Form>

            </Container>
            <ContainerBanner>
                <div>
                    <h1>Welcome to the Blockbit Hub</h1>
                    <button>Register</button>
                </div>
            </ContainerBanner>
        </MainDiv>
    )
}

export default Login