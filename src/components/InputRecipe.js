import styled from "styled-components";

export default function InputRecipe() {

    const categories = [
        ['sweets', 'Doces'],
        ['savorys', 'Salgadas'],
        ['cakes', 'Bolos'],
        ['pies', 'Tortas'],
        ['diverses', 'Diversas'],
        ['birds', 'Aves'],
        ['meats', 'Carnes'],
        ['soups', 'Sopas'],
        ['pastas', 'Massas'],
        ['appetizer', 'Entradas'],
        ['lunch', 'Almoço'],
        ['dinner', 'Jantar'],
      ];

  return (
    <Form>
      <Title
        placeholder="Título"
        type="text">
      </Title>
      <Ingredients>
      <p>Ingredientes:</p>
      <input
        type="text"
      />
      </Ingredients>
      <Preparation>
      <p>Modo de preparo:</p>
        <input
        type="text"
      />
      </Preparation>
      <Image>
      <p>Imagem:</p>
        <input
        placeholder="Escolher arquivo"
        type="file"
      />
      </Image>
      <Categories>
      <p>Categoria</p>
      <input type="text" id="txt1" name="txt1" />
<select id="s1" name="s1">
{categories.map((categoryType) => (
          <option
          key={categoryType[0]}
            name={categoryType[0]}
            category={categories}
          >
            {categoryType[1]}
          </option>
        ))}
</select>
</Categories>
      <Button>
        <p>Adicionar</p>
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
`;

const Title = styled.input`
box-sizing: border-box;
    width: 100%;
    height: 55px;
    border: 1px solid #4d9ad2;
    border-radius: 8px;
    background-color: #fff;
    padding: 0 18px;
    color: #4d9ad2;
    font-size: 14px;
    font-family: 'Roboto';
    margin-bottom: 14px;
    @media (max-width: 1315px) {
      width: 80%;
    }
    @media (max-width: 1000px) {
      height: 45px;
    }
  input::placeholder {
    font-size: 14px;
    color: #4d9ad2;
  }
`

const Ingredients = styled.div`
  input {
    box-sizing: border-box;
    width: 100%;
    height: 55px;
    border: 1px solid #4d9ad2;
    border-radius: 8px;
    background-color: #fff;
    padding: 0 18px;
    color: #4d9ad2;
    font-size: 14px;
    font-family: 'Roboto';
    margin-bottom: 14px;
    @media (max-width: 1315px) {
      width: 80%;
    }
    @media (max-width: 1000px) {
      height: 45px;
    }
  }
  input::placeholder {
    font-size: 14px;
    color: #4d9ad2;
  }
`

const Preparation = styled.div`
  input {
    box-sizing: border-box;
    width: 100%;
    height: 55px;
    border: 1px solid #4d9ad2;
    border-radius: 8px;
    background-color: #fff;
    padding: 0 18px;
    color: #4d9ad2;
    font-size: 14px;
    font-family: 'Roboto';
    margin-bottom: 14px;
    @media (max-width: 1315px) {
      width: 80%;
    }
    @media (max-width: 1000px) {
      height: 45px;
    }
  }
  input::placeholder {
    font-size: 14px;
    color: #4d9ad2;
  }
`

const Image = styled.div`
  input {
    box-sizing: border-box;
    width: 100%;
    height: 55px;
    border: 1px solid #4d9ad2;
    border-radius: 8px;
    background-color: #fff;
    padding: 0 18px;
    color: #4d9ad2;
    font-size: 14px;
    font-family: 'Roboto';
    margin-bottom: 14px;
    @media (max-width: 1315px) {
      width: 80%;
    }
    @media (max-width: 1000px) {
      height: 45px;
    }
  }
  input::placeholder {
    font-size: 14px;
    color: #4d9ad2;
  }
`

const Categories = styled.button`

`

const Button = styled.button`
  width: 100%;
  height: 55px;
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
  :hover{
    background-color: #C0E1FA;
    color: #4d9ad2;
  }
`;