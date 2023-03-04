import styled from "styled-components";
import HeaderAdd from "../components/HeaderAdd";
import InputRecipe from "../components/InputRecipe";

export default function AddRecipe() {
  return (
    <>
      <HeaderAdd />
      <Container>
        <RecipeContainer>
          <InputRecipe />
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
  margin-top: 20vh;
  padding-bottom: 50px;
`;

const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 70%;
  height: 800px;
  background-color: #c0e1fa;
  border-radius: 30px;
  padding: 10px;
`;
