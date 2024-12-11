import { 
    Container, 
    ContainerBanner, 
    ForgotPassword, 
    Form, 
    InputContainer, 
    Logo, 
    MainDiv, 
    Text 
} from "./styles";
import LogoBlack from "../../assets/logo-blockbit@2x 1.png";
import { ContainerButton } from "../../components/Button/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export function Login() {

    const schema = Yup.object({
        email: Yup.string().email("Invalid email format").required("Email is required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    }).required();
   
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = data => console.log(data)

    return (
        <MainDiv>
            <Container>
                <Logo>
                    <img src={LogoBlack} alt="Logo Blockbit Hub" />
                </Logo>
                <Text>
                    <p>Login in Hub</p>
                </Text>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>EMAIL</label>
                        <input type="email" {...register("email")} placeholder="E-mail"/>
                        <p>{errors.email?.message}</p>
                    </InputContainer>
                    <InputContainer>
                        <label>PASSWORD</label>
                        <input type="password" {...register("password")} placeholder="Password" />
                        <p>{errors.password?.message}</p>
                    </InputContainer>
                    <ContainerButton type="submit">Log in</ContainerButton>
                    <ForgotPassword>
                        <a href="#">Forgot Password</a>
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
    );
}

export default Login;
