import { useCharacters } from "./CharactersProvider";
import { API_URL } from "./consts";

export default function SaveCharacter() {
  const { characters } = useCharacters();

  const saveCharacters = async function () {
    const request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(characters),
    };

    try {
      const response = await fetch(API_URL, request);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  };

  return <button onClick={saveCharacters}>Save All Characters</button>;
}
