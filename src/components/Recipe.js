import styled from "styled-components";
import Bolo from "../assets/bolo-de-cenoura.jpg";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

export default function Recipe() {



  return (
    <>
    <StyledRecipe>
        <Image>
        <img alt="Bolo" src={Bolo} />
        </Image>
        <Title>
            <Text>Bolo de cenoura</Text>
            <Icon>
            <AiOutlineHeart />
            </Icon>
        </Title>
    </StyledRecipe>
        <StyledRecipe>
        <Image>
        <img alt="Bolo" src={Bolo} />
        </Image>
        <Title>
            <Text>Bolo de cenoura</Text>
            <Icon>
            <AiOutlineHeart />
            </Icon>
        </Title>
    </StyledRecipe>
        <StyledRecipe>
        <Image>
        <img alt="Bolo" src={Bolo} />
        </Image>
        <Title>
            <Text>Bolo de cenoura</Text>
            <Icon>
            <AiOutlineHeart />
            </Icon>
        </Title>
    </StyledRecipe>
        <StyledRecipe>
        <Image>
        <img alt="Bolo" src={Bolo} />
        </Image>
        <Title>
            <Text>Bolo de cenoura</Text>
            <Icon>
            <AiOutlineHeart />
            </Icon>
        </Title>
    </StyledRecipe>
        <StyledRecipe>
        <Image>
        <img alt="Bolo" src={Bolo} />
        </Image>
        <Title>
            <Text>Bolo de cenoura</Text>
            <Icon>
            <AiOutlineHeart />
            </Icon>
        </Title>
    </StyledRecipe>
        <StyledRecipe>
        <Image>
        <img alt="Bolo" src={Bolo} />
        </Image>
        <Title>
            <Text>Bolo de cenoura</Text>
            <Icon>
            <AiOutlineHeart />
            </Icon>
        </Title>
    </StyledRecipe>
        <StyledRecipe>
        <Image>
        <img alt="Bolo" src={Bolo} />
        </Image>
        <Title>
            <Text>Bolo de cenoura</Text>
            <Icon>
            <AiOutlineHeart />
            </Icon>
        </Title>
    </StyledRecipe>
        <StyledRecipe>
        <Image>
        <img alt="Bolo" src={Bolo} />
        </Image>
        <Title>
            <Text>Bolo de cenoura</Text>
            <Icon>
            <AiOutlineHeart />
            </Icon>
        </Title>
    </StyledRecipe>
        <StyledRecipe>
        <Image>
        <img alt="Bolo" src={Bolo} />
        </Image>
        <Title>
            <Text>Bolo de cenoura</Text>
            <Icon>
            <AiOutlineHeart />
            </Icon>
        </Title>
    </StyledRecipe>
        <StyledRecipe>
        <Image>
        <img alt="Bolo" src={Bolo} />
        </Image>
        <Title>
            <Text>Bolo de cenoura</Text>
            <Icon>
            <AiOutlineHeart />
            </Icon>
        </Title>
    </StyledRecipe>
        <StyledRecipe>
        <Image>
        <img alt="Bolo" src={Bolo} />
        </Image>
        <Title>
            <Text>Bolo de cenoura</Text>
            <Icon>
            <AiOutlineHeart />
            </Icon>
        </Title>
    </StyledRecipe>
        <StyledRecipe>
        <Image>
        <img alt="Bolo" src={Bolo} />
        </Image>
        <Title>
            <Text>Bolo de cenoura</Text>
            <Icon>
            <AiOutlineHeart />
            </Icon>
        </Title>
    </StyledRecipe>
        <StyledRecipe>
        <Image>
        <img alt="Bolo" src={Bolo} />
        </Image>
        <Title>
            <Text>Bolo de cenoura</Text>
            <Icon>
            <AiOutlineHeart />
            </Icon>
        </Title>
    </StyledRecipe>
        <StyledRecipe>
        <Image>
        <img alt="Bolo" src={Bolo} />
        </Image>
        <Title>
            <Text>Bolo de cenoura</Text>
            <Icon>
            <AiOutlineHeart />
            </Icon>
        </Title>
    </StyledRecipe>
        <StyledRecipe>
        <Image>
        <img alt="Bolo" src={Bolo} />
        </Image>
        <Title>
            <Text>Bolo de cenoura</Text>
            <Icon>
            <AiOutlineHeart />
            </Icon>
        </Title>
    </StyledRecipe>
    </>
);
}
const StyledRecipe = styled.div`
box-sizing: border-box;
width: 226px;
height: 282px;
border-radius: 8px;
margin: 30px;
cursor: pointer;
`;

const Image = styled.div`
width: 100%;
height: 80%;
img{
    width: 100%;
    height: 100%;
    border-radius:8px;
}
`;

const Title = styled.div`
width: 100%;
height: 20%;
display: flex;
align-items: center;
justify-content: space-between;
`;

const Text = styled.p`
border: none;
font-size: 16px;
font-weight: 600;
color: #085C9C;

:hover{
  color: #4D9AD2;
}
`

const Icon = styled.div`
font-size: 22px;
:hover{
  color: red;
}
`