import styled from "styled-components";
import Logo from "../assets/2.png"
import { Link } from "react-router-dom";

export default function Header() {
 
  return (
    <StyledHeader>
      <Figure>
        <img alt="logo" src={Logo} />
      </Figure>
      <Grid>
      <Input
        type="text"
        placeholder="Qual receita você procura?"
      ></Input>
        <Buttons>
          <Link to="/sign-in" style={{ textDecoration: "none" }}>
            <button>Entrar</button>
          </Link>
{/*           <Link to="/adicionar-receita" style={{ textDecoration: "none", color: "#9BC5E5" }}>
            <p>Adicionar receita</p>
          </Link> 
          <Link to="/favoritas" style={{ textDecoration: "none", color: "#9BC5E5" }}>
            <p>Favoritas</p>
          </Link> */}
          </Buttons>
          </Grid>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  box-sizing: border-box;
  background-color: #E1EFFA;
  width: 100%;
  position: fixed;
    top: 0;
  padding: 10px 30px;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(2, auto);
  gap: 0 0;
  justify-items: center;
  align-items: center;
  @media (min-width: 900px) {
    position: fixed;
    top: 0;
    grid-template-columns: minmax(25%,50px) minmax(75%,80px);
    gap: 0 0;
    grid-template-rows: auto;
    justify-items: center;
    align-items: center;
    padding: 10px 80px;
  }
`;

const Figure = styled.div`
  img{
    width: 200px;
    mix-blend-mode: multiply; 
  }
  @media (max-width: 620px) {
    img{
    width: 200px;
    mix-blend-mode: multiply;  
  }
  }
  @media (max-width: 450px) {
    img{
    width: 130px; 
  }
  }
  `;

const Input = styled.input`
    padding: 7px;
    border: 1px solid #4D9AD2;
    box-shadow: 6px 6px rgba(147, 187, 218, 0.2);
    border-radius: 8px;
    width: 60%;
    height: 30px;
    font-size: 14px;
    color: #4D9AD2;
    ::placeholder {
    font-size: 14px;
    color: #4D9AD2;
  }
  @media (max-width: 800px) {
    width: 70%; 
    ::placeholder {
      font-size: 12px;
    }
    @media (max-width: 600px) {
  margin-right: 15px;
  width: 70%;
}
@media (max-width: 450px) {
  width: 60%;
}
  }
`

const Grid = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
`;

const Buttons = styled.div`
button {
    border: none;
    font-size: 18px;
    cursor: pointer;
    background-color: #E1EFFA;
    color: #4D9AD2;
    font-weight: bold;
    padding: 10px 30px;

  }
  button:hover {
    font-size: 20px;
    background-color: #4D9AD2;
    color: #FFFFFF;
    border-radius: 30px;
    padding: 10px 30px;

  }
width: 140px;
display: flex;
justify-content: space-around;
@media (max-width: 600px) {
    width: 60px;
    button {
    font-size: 14px;
  }
  }
`;