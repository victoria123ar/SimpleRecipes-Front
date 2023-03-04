import styled from "styled-components";
import Header from "../components/Header";
import InputRecipe from "../components/InputRecipe";

export default function AddRecipe() {


  return (
      <>
      <Header />
      <Container>
      <RecipeContainer>
        <InputRecipe/>
      </RecipeContainer>
      </Container>
      </>
);
}
const Container = styled.main`
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding-top: 450px;
  padding-bottom: 50px;

`;

const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 70%;
  height: 500px;
  background-color: #E1EFFA;
  border-radius: 30px;
  padding: 10px;
`;