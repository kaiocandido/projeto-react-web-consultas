import BackgroundImage from "../../assets/global-communication-background-business-network-design.jpg";
import styled from "styled-components";

// Container principal
export const MainDiv = styled.main`
  background: url('${BackgroundImage}') no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

// Container central
export const Container = styled.div`
  width: 90%;
  max-width: 400px;
  height: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
  };
`

// Logo com animação
export const Logo = styled.div`
  img {
    margin-top: 2rem;
    max-width: 100%;
    height: auto;
  };

  @media (max-height: 800px) {
    img {
      margin-top: 1.5rem;
      height: 40px;
    };
  };
`

// Texto estilizado
export const Text = styled.div`
  font-size: 1rem;
  color: black;
  font-weight: bold;
  text-align: center;

  p {
    margin-top: 0.5rem;
  };

  @media (max-height: 800px) {
    font-size: 0.8rem;
  };
`

// Formulário
export const Form = styled.form`
  width: 100%;
  margin-top: 1.5rem;

  p {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    color: red;
    font-weight: bold;
  };

  .ReCAPTCHA{
    margin-top: 10px;
    margin-left: 15px;
  };

  @media (max-width: 400px){
    .ReCAPTCHA{
        margin-left: -20px;
        transform: scale(0.7);
        
    };
  };

  @media (max-width: 290px){
    .ReCAPTCHA{
        margin-right: 100px; 
        transform: scale(0.6);
        
    };
  };
`

// Inputs
export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  p{
    color: red;
    font-size: 14px;
    line-height: 80%;
    font-weight: 600;
    margin-top: 5px;
    height: 10px;
  };

  label {
    margin-bottom: 0.5rem;
    font-weight: bold;
    font-size: 0.9rem;
  };

  input {
    width: 100%;
    height: 2.5rem;
    padding: 0.5rem;
    border: none;
    border-radius: 8px;
    background: #f2f2f2;
    color: #555;
    font-size: 1rem;

    &::placeholder {
      color: #aaa;
      font-size: 0.9rem;
    };
  };

  @media (max-width: 500px) {
    input {
      font-size: 0.8rem;
      height: 2rem;
    };

    label {
      font-size: 0.8rem;
    };
  };
`

// Botão principal
export const Button = styled.button`
  width: 100%;
  height: 2.5rem;
  border: none;
  border-radius: 8px;
  background-color: #2e7ebb;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;

  &:hover {
    background-color: #246598;
    cursor: pointer;
  };

  @media (max-width: 500px) {
    font-size: 0.9rem;
    height: 2.2rem;
  };
`

// Banner
export const ContainerBanner = styled.div`
  width: 90%;
  max-width: 400px;
  height: 43.3rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: white;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: linear-gradient(to bottom, #21518f, #075a56, #09425e);
  
  h1 {
    margin-top: 5rem;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    text-align: center;
    color: #fff;
  };

  button {
    margin-top: 5rem;
    margin-left: 4.5rem;
    width: 60%;
    height: 2.5rem;
    border: 1px solid white;
    border-radius: 8px;
    background: transparent;
    color: white;
    font-size: 1rem;
    font-weight: 300;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    };
  };

    @media (max-width: 1600px) {
        height: 40.4rem;
    };

    @media (max-width: 907px) {
        display: none;
    };
`

