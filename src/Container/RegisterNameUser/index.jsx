import {
  Button,
  Container,
  Form,
  InputContainer,
  Logo,
  MainDiv,
  Text,
} from "./styles";

import LogoBlack from "../../assets/logo-blockbit@2x 1.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { api } from "../../services/api";
import {  toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export function RegisterNameUser() {
  const navigate = useNavigate()
  
  const handleRegisterClick = () => {
    navigate("/register");
  };

  const schema = Yup.object({
    company_name: Yup.string().required("Company name is required"),
    phone_number: Yup.string().min(11, "Enter cell phone number").required("Cell number is mandatory"),
    position: Yup.string().required('Your position is mandatory'),
    address: Yup.string().required('Your address is required'),
    city: Yup.string().required('Your city is required'),
    country: Yup.string().required('Your country is required'),
    state: Yup.string().required('Your state is required'),
    cep: Yup.string().required('Your cep is required'),
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
        company_name: data.company_name,
        phone_number: data.phone_number,
        position: data.position,
        address: data.address,
        city: data.city,
        country: data.country,
        state: data.state,
        cep: data.cep,
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
          <img src={LogoBlack} alt="Logo Blockbit Hub"  className="LogoBB"/>
        </Logo>
        <Text>
          <p>Register in Hub</p>
        </Text>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Company name</label>
            <input type="text" {...register("company_name")} placeholder="Company name" />
            <p>{errors.company_name?.message}</p>
          </InputContainer>
          <InputContainer>
            <label>Phone number</label>
            <input type="phone"  {...register("phone_number")} placeholder="Phone number" />
            <p>{errors.phone_number?.message}</p>
          </InputContainer>
          <InputContainer>
            <label>Position</label>
            <input type="text" {...register("position")} placeholder="Position" />
            <p>{errors.position?.message}</p>
          </InputContainer>
          <InputContainer>
            <label>Address</label>
            <input type="text" {...register("address")} placeholder="Address" />
            <p>{errors.address?.message}</p>
          </InputContainer>
          <InputContainer>
            <label>City</label>
            <input type="text" {...register("city")}  placeholder="City" />
            <p>{errors.city?.message}</p>
          </InputContainer>
          <InputContainer>
            <label>Country</label>
            <input type="text" {...register("country")} placeholder="Country" />
            <p>{errors.country?.message}</p>
          </InputContainer>
          <InputContainer>
            <label>State</label>
            <input type="text" {...register("state")}  placeholder="State" />
            <p>{errors.state?.message}</p>
          </InputContainer>
          <InputContainer>
            <label>CEP</label>
            <input type="number" {...register("cep")} placeholder="CEP" />
            <p>{errors.cep?.message}</p>
          </InputContainer>
          <Button onClick={handleRegisterClick}>Back</Button>
          <Button type="submit">Next</Button>
        </Form>
      </Container>
    </MainDiv>
  );
};

export default RegisterNameUser;
