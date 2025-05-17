import styled from "styled-components";
import { useCharacters } from "./CharactersProvider";
import { getModifier } from "../helpers/helpers";

const StyledAttribute = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;

const StyledTitle = styled.div`
  font-size: 0.8rem;
  margin-top: 1rem;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledScore = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  background-color: #282c34;
  width: 50px;
  height: 50px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledModifier = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

const StyledScoreWrapper = styled.div`
  padding: 0.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 0.5rem;
`;

export default function Attribute({ attributeName, characterIndex }) {
  const { characters, incrementAttribute, decrementAttribute } =
    useCharacters();

  const { attributes } = characters[characterIndex];
  const modifier = getModifier(attributes[attributeName]);

  return (
    <StyledAttribute>
      <div>{attributeName}</div>

      <StyledScoreWrapper>
        <StyledScore>{attributes[attributeName]}</StyledScore>
        <div>
          <button
            onClick={() =>
              decrementAttribute({ characterIndex, attributeName })
            }
          >
            -
          </button>
          <button
            onClick={() =>
              incrementAttribute({ characterIndex, attributeName })
            }
          >
            +
          </button>
        </div>
        <StyledTitle>Modifier:</StyledTitle>
        <StyledModifier>{modifier}</StyledModifier>
      </StyledScoreWrapper>
    </StyledAttribute>
  );
}
