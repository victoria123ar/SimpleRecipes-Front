import styled from "styled-components";
import Logo from "../assets/2.png";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

export default function Header() {
  return (
    <StyledHeader>
      <Figure>
        <img alt="logo" src={Logo} />
      </Figure>
      <Grid>
        <Input>
          <Container>
            <input type="text" placeholder="Qual receita você procura?" />
            <Button>
              <AiOutlineSearch />
            </Button>
          </Container>
        </Input>
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
  background-color: #e1effa;
  width: 100%;
  height: 350px;
  position: fixed;
  top: 0;
  padding: 10px 30px;
  display: flex;
  justify-items: center;
  align-items: center;
  @media (min-width: 800px) {
    position: fixed;
    top: 0;
    height: 257px;
    justify-items: center;
    align-items: center;
    padding: 10px 80px;
  }
  @media (max-width: 450px) {
    height: 250px;
  }
`;

const Figure = styled.div`
  img {
    width: 200px;
    mix-blend-mode: multiply;
  }
  @media (max-width: 620px) {
    img {
      width: 200px;
      mix-blend-mode: multiply;
    }
  }
  @media (max-width: 450px) {
    img {
      width: 130px;
    }
  }
`;

const Container = styled.div`
  float: left;
  width: 60%;
  height: 30px;
  position: relative;
`;

const Input = styled.form`
  max-width: 400px;
  min-width: 350px;
  input {
    padding: 7px;
    border: 1px solid #4d9ad2;
    box-shadow: 6px 6px rgba(147, 187, 218, 0.2);
    border-radius: 8px;
    max-width: 400px;
    min-width: 350px;
    height: 100%;
    font-size: 14px;
    color: #4d9ad2;
    float: left;
    @media (max-width: 450px) {
      max-width: 300px;
      min-width: 250px;
    }
  }
  input::placeholder {
    font-size: 14px;
    color: #4d9ad2;
  }
  @media (max-width: 800px) {
    max-width: 400px;
    min-width: 350px;
    position: absolute;
    left: calc(50% - 175px);
    top: 300px;
    ::placeholder {
      font-size: 12px;
    }
    @media (max-width: 600px) {
      margin-right: 15px;
      max-width: 400px;
      min-width: 350px;
    }
    @media (max-width: 450px) {
      max-width: 300px;
      min-width: 250px;
      left: calc(50% - 125px);
      top: 205px;
    }
  }
`;

const Button = styled.button`
  position: absolute;
  right: -65%;
  top: 10%;
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
`;

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
    background-color: #e1effa;
    color: #4d9ad2;
    font-weight: bold;
    padding: 10px 30px;
  }
  button:hover {
    font-size: 20px;
    background-color: #4d9ad2;
    color: #ffffff;
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
