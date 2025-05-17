import { API_URL } from "../../constants/consts";
import { Character } from "../../types/types";

export const updateCharacters = async function (characters: Character[]) {
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
