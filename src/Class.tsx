import styled from "styled-components";
import { useCharacters } from "./CharactersProvider";

const StyledClass = styled.button<{ $hasMinimumReqs?: boolean }>`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  background: transparent;
  font-size: 1.25rem;
  font-weight: bold;

  color: ${({ $hasMinimumReqs }) => ($hasMinimumReqs ? "white" : "#7f1d1d")};
`;

export default function Class({
  classType,
  minimumReqs,
  setSelectedClass,
  characterIndex,
}) {
  const { characters } = useCharacters();
  const { attributes } = characters[characterIndex];
  const hasMinimumReqs = Object.entries(attributes).every(
    ([attribute, score]) => {
      return score >= minimumReqs[attribute];
    }
  );

  return (
    <StyledClass
      $hasMinimumReqs={hasMinimumReqs}
      onClick={() => setSelectedClass(classType)}
    >
      {classType}
    </StyledClass>
  );
}
