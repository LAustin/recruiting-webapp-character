import { useCharacters } from "./CharactersProvider";
import { updateCharacters } from "../api/v1/updateCharacters";

export default function SaveCharacter() {
  const { characters } = useCharacters();

  return (
    <button onClick={() => updateCharacters(characters)}>
      Save All Characters
    </button>
  );
}
