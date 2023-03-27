import styled from "styled-components";
import { CiLogin } from "react-icons/ci";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import PasswordIndicator from "./PasswordIndicator"

export default function InputSignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);
  const [passwordConfirmShow, setPasswordConfirmShow] = useState(false);
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);

  
  function register(e) {
    e.preventDefault();
    setDisabled(true);
  }

  const togglePassword = () => {
    setPasswordShow(passwordShow ? false : true);
  };

  const togglePasswordConfirm = () => {
    setPasswordConfirmShow(passwordConfirmShow ? false : true);
  };

  return (
    <Form onSubmit={register}>
      <input placeholder="Nome" type="text" 
      value={name}
      onChange={(e) => setName(e.target.value)}/>
      <input placeholder="E-mail" type="email" 
      value={email}
      onChange={(e) => setEmail(e.target.value)}/>
      <InputPass>
      <input placeholder="Senha" 
      type={passwordShow ? "text" : "password"}
      value={password}
      onChange={(e) => setPassword(e.target.value)}/>
      <ButtonPass onClick={togglePassword}>
          {passwordShow ? <FaEye /> : < FaEyeSlash />}
        </ButtonPass>
        <PasswordIndicator password={password} setPassword={setPassword} />
      </InputPass>
      <InputPass>
      <input placeholder="Confirme sua senha"
      type={passwordConfirmShow ? "text" : "password"}
      value={passwordConfirm}
      onChange={(e) => setPasswordConfirm(e.target.value)} />
      <ButtonPass onClick={togglePasswordConfirm}>
          {passwordConfirmShow ? <FaEye /> : < FaEyeSlash />}
        </ButtonPass>
        <PasswordIndicator password={password} setPassword={setPassword} />
      </InputPass>
      <Button disabled={!disabled ? false : true}>
        <CiLogin />
        <p>Cadastrar</p>
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

const InputPass = styled.div`
  position: relative;
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
  }
  input::placeholder {
    font-size: 22px;
    color: #4d9ad2;
  }
`;

const ButtonPass = styled.button`
  position: absolute;
  right: 5%;
  top: 16%;
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  line-height: center;
  font-size: 22px;
  color: #c0e1fa;
  :hover {
    color: #4d9ad2;
  }
  @media (max-width: 1315px) {
    right: 13%;
    top: 16%;
  }
  @media (max-width: 1000px) {
    right: 12%;
    top: 21%;
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