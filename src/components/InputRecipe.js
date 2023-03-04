import styled from "styled-components";

export default function InputRecipe() {
  const categories = [
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
    <Form>
      <Title placeholder="Nome da receita" type="text"></Title>
      <Ingredients>
        <p>Ingredientes:</p>
        <textarea rows="10" cols="50"></textarea>
      </Ingredients>
      <Preparation>
        <p>Modo de preparo:</p>
        <textarea rows="10" cols="50"></textarea>
      </Preparation>
      <Buttons>
        <Image>
          <label for="imagem">Escolha uma imagem</label>
          <input
            type="file"
            id="imagem"
            accept="image/png, image/jpeg, image/jpg"
          />
        </Image>
        <Categories>
          <label for="categories-select">Categorias</label>
          <select id="categories-select">
            {categories.map((categoryType) => (
              <option key={categoryType[0]} value={categoryType[0]}>
                {categoryType[1]}
              </option>
            ))}
          </select>
        </Categories>
      </Buttons>
      <ContainerButton>
        <Button>
          <p>Adicionar</p>
        </Button>
      </ContainerButton>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 35px;
  border: 1px solid #4d9ad2;
  border-radius: 8px;
  background-color: #fff;
  padding: 0 18px;
  color: #4d9ad2;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
  @media (max-width: 1000px) {
    height: 45px;
  }
  ::placeholder {
    font-size: 16px;
    color: #4d9ad2;
    font-weight: 600;
  }
`;

const Ingredients = styled.div`
  p {
    font-size: 16px;
    color: #4490ce;
    font-weight: bold;
    margin-bottom: 5px;
  }
  textarea {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #4d9ad2;
    border-radius: 8px;
    background-color: #fff;
    padding: 10px;
    color: #4d9ad2;
    font-size: 14px;
    margin-bottom: 14px;
  }
  textarea::placeholder {
    font-size: 14px;
    color: #4d9ad2;
  }
`;

const Preparation = styled.div`
  p {
    font-size: 16px;
    color: #4490ce;
    font-weight: bold;
    margin-bottom: 5px;
  }
  textarea {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #4d9ad2;
    border-radius: 8px;
    background-color: #fff;
    padding: 10px;
    color: #4d9ad2;
    font-size: 14px;
    margin-bottom: 14px;
  }
  textarea::placeholder {
    font-size: 14px;
    color: #4d9ad2;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 600px) {
    display: grid;
    justify-items: center;
    justify-content: center;
  }
`;

const Image = styled.div`
  input[type="file"] {
    display: none;
  }
  label {
    width: 100%;
    height: 45px;
    background-color: #4d9ad2;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    padding: 10px;
    :hover {
      font-size: 20px;
    }
  }
  @media (max-width: 600px) {
    width: 110%;
  }
`;

const Categories = styled.div`
  width: 50%;
  height: 45px;
  background-color: #4d9ad2;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  p {
    margin-left: 10px;
  }
  select {
    font-size: 16px;
    font-weight: 700;
    color: #4d9ad2;
    border: none;
    border-radius: 8px;
    margin-left: 10px;
    padding: 5px;
    cursor: pointer;
  }
  @media (max-width: 600px) {
    width: 110%;
  }
`;

const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  width: 55%;
  height: 45px;
  background-color: #4d9ad2;
  border: none;
  border-radius: 8px;
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  text-align: center;
  p {
    margin-left: 10px;
  }
  :hover {
    background-color: #c0e1fa;
    color: #4d9ad2;
  }
`;
