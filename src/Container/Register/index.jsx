import { useState } from "react";
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
import LogoBlack from "../../assets/logo-blockbit@2x 1.png";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import {  toast } from 'react-toastify';
import { useForm } from "react-hook-form";

export function Register() {
    const navigate = useNavigate();
    const [captchaValue, setCaptchaValue] = useState(null)

    const handleCaptchaChange = (value) => {
      console.log("Captcha value:", value)
      setCaptchaValue(value)
    };
  
    const handleRegisterClick = () => {
      navigate("/");
    };

    // Função para redirecionar ao clicar no botão "infos"
    /*const handleRegisterClickNext = () => {
      navigate("/infos");
    };*/

  const schema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must be the same').required('Confirm your password'),
  }).required();
 
  const {
      register,
      handleSubmit,
      formState: { errors },
  } = useForm({
      resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      
      const {status} = await api.post('/users',{
        email: data.email,
        password: data.password,
      },{
        validateStatus: () =>true,

      });
    
      if( status === 200 || status ===201){
        toast.success('Account created successfully')
      }else if(status === 409 ){
        toast.error('The email already exists in the system! Log in to continue')
      }else{
        throw new Error()
      }
    } catch (error) {
      toast.error('System failure, please try again!')
    }};

  return (
    <MainDiv>
      <Container>
        <Logo>
          <img src={LogoBlack} alt="Logo Blockbit Hub" />
        </Logo>
        <Text>
          <p>Register in Hub</p>
        </Text>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>E-mail</label>
            <input type="email" {...register("emailss")}  placeholder="E-mail" />
            <p>{errors.email?.message}</p>
          </InputContainer>
          <InputContainer>
            <label>Password</label>
            <input type="password" {...register("password")}  placeholder="Password" />
            <p>{errors.password?.message}</p>
          </InputContainer>
          <InputContainer>
            <label>Confirm Password</label>
            <input type="password" {...register("confirmPassword")} placeholder="Confirm Password" />
            <p>{errors.confirmPassword?.message}</p>
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
          <button onClick={handleRegisterClick}>Login</button>
        </div>
      </ContainerBanner>
    </MainDiv>
  );
};

export default Register;
