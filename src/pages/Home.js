import styled from "styled-components";
import Header from "../components/Header";
import Categories from "../components/Categories";
import React, { useState } from "react";
import Recipe from "../components/Recipe";
import Bolo from "../assets/bolo-de-cenoura.jpg";

export default function Home() {
  const [filter] = useState([{ name: "Bolo de cenoura", image: Bolo }]);
  return (
    <>
      <Header />
      <Categories />
      <StyledRecipes>
        <Recipes>
          {filter.map((recipe, index) => (
            <Recipe key={index} recipe={recipe} />
          ))}
        </Recipes>
      </StyledRecipes>
    </>
  );
}

const StyledRecipes = styled.main`
  width: 100vw;
  height: 100%;
  box-sizing: border-box;
  background-color: #f7f9f6;
  padding-top: 307px;
  @media (max-width: 800px) {
    padding-top: 400px;
  }
  @media (max-width: 450px) {
    padding-top: 300px;
  }
`;

const Recipes = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 80px;
  padding-top: 50px;
  @media (max-width: 800px) {
    padding-top: 20px;
  }
`;
