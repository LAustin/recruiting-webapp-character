import styled from "styled-components";
import Attribute from "./Attribute";
import { ATTRIBUTE_LIST } from "../constants/consts";
import Card from "./Card";
import { useCharacters } from "./CharactersProvider";

const StyledAttributes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledText = styled.div`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
`;

export default function Attributes({ characterIndex }) {
  const { getRemainingAttributePoints } = useCharacters();

  return (
    <Card>
      <div>Attributes</div>
      <StyledText>
        Attribute Points Available:{" "}
        {getRemainingAttributePoints(characterIndex)}
      </StyledText>
      <StyledAttributes>
        {ATTRIBUTE_LIST.map((attribute) => (
          <Attribute
            key={attribute}
            attributeName={attribute}
            characterIndex={characterIndex}
          />
        ))}
      </StyledAttributes>
    </Card>
  );
}
