import styled from "styled-components";
import Logo from "../assets/1.png";
import InputSignUp from "../components/InputSignUp";
import { Link } from "react-router-dom";

export default function Login() {

  return (
    <Container>
      <Page>
        <img alt="logo" src={Logo} />
        <InputSignUp />
        <Cadastro>
          <Link to="/sign-in" style={{ textDecoration: "none", color: "#9BC5E5" }}>
            <p>Já tem cadastro? Faça seu login!</p>
          </Link>
        </Cadastro>
      </Page>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #C0E1FA;//9BC5E5
  @media (max-width: 1000px) {
    background-color: #ffffff;
    }
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  height: 90%;
  background-color: #ffffff;
  border-radius: 30px;
  padding: 10px;
  @media (max-width: 1350px) {
    height: 100%;
  }
  @media (max-width: 1400px) {
      width: 25%;
    }
    @media (max-width: 1300px) {
      height: 90%;
    }
  @media (max-width: 1000px) {
    width: 100%;
    border-radius: 0px;
  }
  img {
    width: 50%;
    @media (max-width: 1000px) {
      width: 20%;
      margin-bottom: 10%;
    }
    @media (max-width: 800px) {
        margin-bottom: 0px;
    }
  }
`;

const Cadastro = styled.button`
  margin-top: 10px;
  width: 67%;
  height: 45px;
  border-radius: 8px;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
  
  display: flex;
  justify-content: center;
  align-items: center;
  color: #9BC5E5;
  font-size: 20px;
  p{
    margin-left: 10px;
  }
  
  :hover{
    background-color: #D8EAF7;
  }
  @media (max-width: 800px) {
    height: 45px;
  }
`;