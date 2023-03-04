import styled from "styled-components";
import { CiLogin } from "react-icons/ci";

export default function InputSignIn() {
  return (
    <Form>
      <input placeholder="Nome" type="text" />
      <input placeholder="E-mail" type="email" />
      <input placeholder="Senha" type="password" />
      <input placeholder="Confirme sua senha" type="password" />
      <Button>
        <CiLogin />
        <p>Entrar</p>
      </Button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    width: 100%;
  }
  input {
    box-sizing: border-box;
    width: 100%;
    height: 45px;
    border: 1px solid #4d9ad2;
    border-radius: 8px;
    background-color: #fff;
    padding: 0 18px;
    color: #4d9ad2;
    font-size: 22px;
    margin-bottom: 14px;
    @media (max-width: 1315px) {
      width: 80%;
    }
    @media (max-width: 1000px) {
      height: 45px;
    }
  }
  input::placeholder {
    font-size: 22px;
    color: #4d9ad2;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 45px;
  background-color: #4d9ad2;
  border: none;
  border-radius: 8px;
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    margin-left: 10px;
  }
  @media (max-width: 1315px) {
    width: 80%;
  }
  @media (max-width: 1000px) {
    height: 45px;
  }
  :hover {
    background-color: #c0e1fa;
    color: #4d9ad2;
  }
`;
