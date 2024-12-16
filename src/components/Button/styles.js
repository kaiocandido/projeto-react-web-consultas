import styled from "styled-components"

// Botão principal
export const ContainerButton = styled.button`
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