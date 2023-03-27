import styled from "styled-components";
import HeaderAdd from "../components/HeaderAdd";

export default function AddRecipe() {
  return (
    <>
    <HeaderAdd />
    <Container>
        <h1>Receitas salvas</h1>
        <ContainerRecipes>
            <p>Você ainda não tem nenhuma receita salva!</p>
            </ContainerRecipes>
      </Container>
    </>
  );
}

const Container = styled.main`
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding-top: 20vh;
  h1{
    color: #4d9ad2;
    font-size: 26px;
  }
`;

const ContainerRecipes = styled.div`
  width: 70%;
  height: 800px;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  text-align: center;
  p{
    color: #4d9ad2;
    font-size: 16px;
  }
`