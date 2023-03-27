import styled from "styled-components";
import React, { useState } from "react";

export default function Categories() {
  const [category] = useState("all");

  const categories = [
    ["all", "Todas"],
    ["sweets", "Doces"],
    ["savorys", "Salgadas"],
    ["cakes", "Bolos"],
    ["pies", "Tortas"],
    ["diverses", "Diversas"],
    ["birds", "Aves"],
    ["meats", "Carnes"],
    ["soups", "Sopas"],
    ["pastas", "Massas"],
    ["appetizer", "Entradas"],
    ["lunch", "Almoço"],
    ["dinner", "Jantar"],
  ];

  return (
    <CategoriesContainer>
      {categories.map((categoryType) => (
        <StyledCategory
          key={categoryType[0]}
          type="button"
          name={categoryType[0]}
          category={category}
        >
          {categoryType[1]}
        </StyledCategory>
      ))}
    </CategoriesContainer>
  );
}

const CategoriesContainer = styled.div`
  background-color: #e1effa;
  width: 100%;
  height: 50px;
  position: relative;
  top: 257px;
  border: 1px solid #fff;
  display: flex;
  position: fixed;
  justify-content: center;
  list-style-type: none;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 1110px) {
    padding: 0 10px;
    justify-content: space-between;
  }
  @media (max-width: 800px) {
    top: 350px;
  }
  @media (max-width: 450px) {
    top: 250px;
  }
`;

const StyledCategory = styled.button`
  cursor: pointer;
  margin: 8px;
  background-color: transparent;
  border: none;
  color: ${({ name, category }) =>
    name === category ? " #085C9C" : "#4D9AD2"};
  font-size: 16px;
  font-weight: 600;
  border-bottom: ${({ name, category }) =>
    name === category ? "1px solid #085C9C" : "none"};

  :hover {
    color: #085c9c;
  }
  @media (max-width: 690px) {
    font-size: 14px;
  }
`;
