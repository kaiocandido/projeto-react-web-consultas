import styled from "styled-components";
import BackgroundImage from "../../assets/global-communication-background-business-network-design.jpg";

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
  width: 800px;
  height: auto;
  padding: 1rem;
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
  @media (max-width: 900px) {
    width: 400px;
  };

  @media (max-width: 1600px) {
    width: 400px;
    height: 42rem;
  };
`

// Logo com animação
export const Logo = styled.div`

  img {
    margin-top: 1rem;
    margin-bottom: 1rem;
    max-width: 25%;
    height: auto;
    margin-left: 270px;
  };

  @media (max-width: 1600px) {
      margin-right: 340px;
      height: auto;
  };

  @media (max-width: 1026px) {
    margin-right: 200px;
  };

  @media (max-width: 900px) {
    margin-right: 360px;
  };
`

// Texto estilizado
export const Text = styled.div`
  font-size: 1rem;
  color: black;
  font-weight: bold;
  text-align: center;

  p {
    margin-bottom: 0.8rem;
  };

  @media (max-height: 800px) {
    font-size: 0.8rem;
  };
`

// Formulário
export const Form = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr; 
  gap: 20px; 
  max-width: 800px;
  margin: 0 auto;

  p {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    font-weight: bold;
  };

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; 
    gap: 10px; 
    max-width: 400px;
    margin: 0 auto;
  };
`

// Inputs
export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

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

export const ContainerButton = styled.div`
  width: 70%;
  display: flex;
  gap: 80px
`

export const Button = styled.button`
  width: 40%;
  height: 2.5rem;
  border: none;
  border-radius: 8px;
  background-color: #2e7ebb;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  margin-top: 1rem;

  &:hover {
    background-color: #246598;
    cursor: pointer;
  };

  @media (max-width: 420px) {
    font-size: 0.9rem;
    height: 1rem;
    font-size: 0.5rem;
  };
`

export const ContainerCheckbox = styled.div`
    margin-bottom: 7rem;
    p{
      font-size: 23px;
      font-weight: 600px;
      margin-bottom: 5rem;
      margin-top: 3rem;
    };

    .toggle-switch{
      margin-left: 5rem;
      padding-bottom: 15px;
    };

    .toggle-switch label{
      margin-left: 1rem;
    };

    .toggle-container {
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: Arial, sans-serif;
      font-size: 14px;
    };

    @media (max-width: 1601px) {
      margin-bottom: 0px;

      p{
      font-size: 16px;
      font-weight: 600px;
      margin-bottom: 2rem;
      margin-top: 1rem;
    };

    .toggle-switch{
    };

    .toggle-switch label{
      margin-left: 1rem;
      font-size: 14px;
    };

    .toggle-container {
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: Arial, sans-serif;
      font-size: 14px;
    };

  };
`

// Banner
export const ContainerBanner = styled.div`
  width: 90%;
  max-width: 400px;
  height: 47.7rem;
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

  @media (max-width: 1900px) {
    height: 29rem
  };

  @media (max-width: 500px) {
    display: none;
  };

  @media (max-width: 1600px) {
    width: 400px;
    height: 42rem;
  };
`