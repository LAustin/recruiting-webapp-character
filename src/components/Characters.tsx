import styled from "styled-components";
import Character from "./Character";
import { useCharacters } from "./CharactersProvider";

const StyledCharacters = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6rem;
`;

export default function Characters() {
  const { characters } = useCharacters();

  return (
    <StyledCharacters>
      {characters.map((character, index) => (
        <Character
          key={character.name}
          characterIndex={index}
          character={character}
        />
      ))}
    </StyledCharacters>
  );
}
