import {
    Button,
    Container,
    ContainerBanner,
    ContainerButton,
    ContainerCheckbox,
    Logo,
    MainDiv,
    Text,
  } from "./styles";
  
  import LogoBlack from "../../assets/logo-blockbit@2x 1.png";
  import { useNavigate } from "react-router-dom";
  
  export function Terms() {
    const navigate = useNavigate()
  
    const handleRegisterClick = () => {
      navigate("/infos");
    };

    const handleRegisterClickNext = () => {
      navigate("/");
    };
  
    return (
      <MainDiv>
        <Container>
          <Logo>
            <img src={LogoBlack} alt="Logo Blockbit Hub"  className="LogoBB"/>
          </Logo>
          <Text>
            <p>Register in Hub</p>
          </Text>
          <ContainerCheckbox>
                <p>By clicking finish, you agree that you have read and accepted the terms</p>
                  <div className="toggle-switch">
                    <input type="checkbox" id="switch" />
                    <label>General Product Agreement</label>
                  </div>
                  <div className="toggle-switch">
                    <input type="checkbox" id="switch" />
                    <label>Privacy Statement</label>
                  </div>
                <div className="toggle-switch">
                    <input type="checkbox" id="switch" />
                    <label>Terms of Use</label>
                </div>   
                <div className="toggle-switch">
                    <input type="checkbox" id="switch" />
                    <label>Um contato de renovação é uma pessoa ou pessoas a serem notificadas quando os serviços forem expirar e estiverem prontos para renovação.</label>
                </div>   
                <div className="toggle-switch">
                    <input type="checkbox" id="switch" />
                    <label>Caso seja um parceiro ou revendedor licenciado, recomenda-se que forneça suas informações fiscais para facilitar a declaração de imposto de renda e manutenção de registros.</label>
                </div>   
                <div className="toggle-switch">
                    <input type="checkbox" id="switch" />
                    <label>A fim de fornecer um melhor apoio à sua empresa, é possível adicionar abaixo as informações de seu distribuidor.</label>
                </div>   
            </ContainerCheckbox>        
          <ContainerButton>
            <Button type="submit" onClick={handleRegisterClick}>Back</Button>
            <Button type="submit" onClick={handleRegisterClickNext}>Finish</Button>
          </ContainerButton>
        </Container>
        <ContainerBanner>
            <div>
                <h1>Welcome to the Blockbit Hub</h1>
            </div>
        </ContainerBanner>
      </MainDiv>
    );
  };
  
  export default Terms;
  