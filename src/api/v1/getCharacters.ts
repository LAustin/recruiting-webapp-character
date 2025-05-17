import { API_URL } from "../../constants/consts";

const request = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

export const getCharacters = async function () {
  try {
    const response = await fetch(API_URL, request);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    return json.body;
  } catch (error) {
    console.error(error.message);
  }
};
