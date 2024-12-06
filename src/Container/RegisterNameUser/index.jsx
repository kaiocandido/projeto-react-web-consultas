import {
  Button,
  Container,
  ContainerButton,
  Form,
  InputContainer,
  Logo,
  MainDiv,
  Text,
} from "./styles"

import LogoBlack from "../../assets/logo-blockbit@2x 1.png"


export function RegisterNameUser() {

  return (
    <MainDiv>
      <Container>
        <Logo>
          <img src={LogoBlack} alt="Logo Blockbit Hub"  className="LogoBB"/>
        </Logo>
        <Text>
          <p>Register in Hub</p>
        </Text>
        <Form>
          <InputContainer>
            <label>Company name</label>
            <input type="text" placeholder="Company name" />
          </InputContainer>
          <InputContainer>
            <label>Phone number</label>
            <input type="phone" placeholder="Phone number" />
          </InputContainer>
          <InputContainer>
            <label>Position</label>
            <input type="text" placeholder="Position" />
          </InputContainer>
          <InputContainer>
            <label>Address</label>
            <input type="text" placeholder="Address" />
          </InputContainer>
          <InputContainer>
            <label>City</label>
            <input type="text" placeholder="City" />
          </InputContainer>
          <InputContainer>
            <label>Country</label>
            <input type="text" placeholder="Country" />
          </InputContainer>
          <InputContainer>
            <label>State</label>
            <input type="text" placeholder="State" />
          </InputContainer>
          <InputContainer>
            <label>CEP</label>
            <input type="number" placeholder="CEP" />
          </InputContainer>
        </Form>
        <ContainerButton>
          <Button type="submit">Back</Button>
          <Button type="submit">Next</Button>
        </ContainerButton>
      </Container>
    </MainDiv>
  )
}

export default RegisterNameUser
