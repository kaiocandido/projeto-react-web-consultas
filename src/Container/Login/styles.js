import styled from "styled-components";
import BackgroundImage from "../../assets/global-communication-background-business-network-design.jpg"
import  { keyframes } from 'styled-components';


const pulse = keyframes`
  0%, 100% {
    transform: scale(0.9);
    opacity: 1;
  }
  20% {
    transform: scale(1);
    opacity: 1;
    
  }
`


export const MainDiv = styled.main`
    background: url('${BackgroundImage}');
    display: flex;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
 
`

export const Container = styled.div`
    width: 37vh;
    height: 40vh; 
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
    flex-direction: column;
    background: white;
    border-radius: 5px;
`




export const Logo = styled.div`
    img{
        animation: ${pulse} 3.5s infinite;
        margin-top: 40px;
        max-width: 100%;
        height: 50px;
    }

    @media (max-height: 800px){
        img{
            margin-top: 90px;
            height: 30px;
        }    
    }
`

export const Text = styled.div`
    font-size: 15px;
    color: #fff;
    font-weight: bold;
    margin: 0;
    text-align: center; 

    
    @media (max-height: 800px){
        p{
            margin-top: 10px;
            font-size: 12px;
        }    
    }
`

export const Form = styled.div`
    width: 90%; 
    margin-bottom: 60px;
    justify-content: center;
    flex-direction: column;

    p{
        margin-bottom: 10px;
        font-size: 14px;
        line-height: 80%;
        color: red;
        font-weight: 900;
        text-decoration: none;
    }
`

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 10px 35px;


    input {
        
        width: 80%;
        height: 35px;
        border: none;
        border-radius: 15px;
        padding: 15px;
        background: #F2F2F2;
        color: gray;
        font-size: 12px;
        outline: none;
        box-sizing: border-box;


        &::placeholder {
            color: gray;
            font-size: 10px;
            font-weight: 800;
        }
    }

    label {
        color: black;
        margin-bottom: 10px;
        font-weight: 800;
    }

    @media (max-height: 800px){

        input{
            width: 80%;
            height: 10px;
        }

        label{
            font-size: 10px;
        }    
    }

`

export const Button = styled.button`
    width: 80%;
    font-weight: bold;
    height: 35px;
    border: none;
    border-radius: 15px;
    color: #fff;
    font-size: 17px;
    outline: none;
    background-color: #2E7EBB;
    margin: 10px 35px;
  

    &:hover{
        text-decoration: underline;
    }

    @media (max-height: 800px){
        width: 80%;
        height: 25px;
    }
`

export const ContainerBanner = styled.div`
 
    width: 37vh;
    height: 40vh; 
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
    flex-direction: column;
    background: linear-gradient(to bottom, rgba(33, 81, 143), rgba(7, 90, 86), rgba(9, 66, 94));
    border-radius: 5px;

        h1{
            color: white;
            text-align: center;
            justify-content: center;
            align-items: center;
            margin-bottom: 40px;
            font-size: 38px;

        }

        div{
            margin-top: 70px;
            justify-content: center; 
            align-items: center; 
            height: 100%; 
        }
        
        button{
            width: 35%;
            font-weight: 300;
            height: 35px;
            border: 1px solid white;
            border-radius: 15px;
            color: white;
            font-size: 17px;
            outline: none;
            background: linear-gradient(to bottom, rgba(33, 81, 143, 0.1), rgba(7, 90, 86, 0.1), rgba(9, 66, 94, 0.1));
            margin: 10px 33%;
            
            &:hover{
                text-decoration: underline;
            }
            
        }

        @media (max-height: 800px){
            h1{
                font-size: 20px;
            }

            button{
                height: 25px;
                font-size: 13px;
            }
        }

        @media (max-width: 500px){
            display: none;
        }
    
`

export const ForgotPassword = styled.div`
    margin-top: 10px;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 12px;

    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }

    @media (max-height: 800px){
        font-size: 12px;
        margin-bottom: 25px;
    }
`