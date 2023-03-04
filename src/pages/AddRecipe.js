import styled from "styled-components";
import HeaderAdd from "../components/HeaderAdd";
import InputRecipe from "../components/InputRecipe";

export default function AddRecipe() {


  return (
      <>
      <HeaderAdd />
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
  padding-top: 30%;
  padding-bottom: 50px;
@media (max-width: 2500px) {
  padding-top: 0%;
}
`;

const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 70%;
  height: 800px;
  background-color: #C0E1FA;
  border-radius: 30px;
  padding: 10px;
`;