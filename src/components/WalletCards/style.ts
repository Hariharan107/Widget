import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { styled } from "styled-components";

export const WalletCardContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #f1f1f1;
`;
export const StyledRow = styled(Row)`
  text-align: center;
`;
export const StyledImage = styled(Image)`
  border-radius: 50%;
  @media screen and (max-width: 500px) {
  }
`;
export const StyledCol = styled(Col)`
  padding-bottom: calc(2%);
`;
export const StyledButton = styled(Button)`
  background-color: #f1f1f1;
  color: black;
  border: none;
  padding: calc(0.5rem - 1px) 1rem;
  border-radius: 5rem;
  margin-bottom: 1rem;
  font-weight: bold;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
export const StyleHeadText = styled.div`
  font-family: "Noto Serif", sans-serif;
  font-weight: bolder;
`;
export const StyledText = styled.p`
  font-family: "Noto Serif", sans-serif;
  font-weight: bolder;
  font-size: 2rem;
`;
