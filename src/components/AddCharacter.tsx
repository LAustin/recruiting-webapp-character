import { useCharacters } from "./CharactersProvider";

export default function AddCharacter() {
  const { addNewCharacter } = useCharacters();
  return <button onClick={addNewCharacter}>Add New Character</button>;
}
