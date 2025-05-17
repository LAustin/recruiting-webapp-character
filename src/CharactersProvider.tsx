import { createContext, useContext, useState, useEffect } from "react";
import {
  DEFAULT_CHARACTER,
  MAX_ATTRIBUTE_POINTS,
  SKILL_LIST,
  API_URL,
} from "./consts";
import { getModifier, getPointsToSpend } from "./helpers";
import { State } from "./types";

const DEFAULT_STATE: State = {
  incrementAttribute: () => {},
  decrementAttribute: () => {},
  getRemainingAttributePoints: () => 0,
  incrementSkill: () => {},
  decrementSkill: () => {},
  getRemainingSkillPoints: () => 0,
  calcTotalSkills: () => 0,
  characters: [DEFAULT_CHARACTER],
  addNewCharacter: () => {},
};

const CharactersContext = createContext(DEFAULT_STATE);

export const useCharacters = function () {
  return useContext(CharactersContext);
};

const request = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

export function CharactersProvider({ children }) {
  const [characters, setCharacters] = useState([DEFAULT_CHARACTER]);

  useEffect(() => {
    const fetchData = async function () {
      try {
        const response = await fetch(API_URL, request);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setCharacters(json.body);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  const addNewCharacter = function () {
    setCharacters((characters) => {
      const nextCharacters = structuredClone(characters);
      const newCharacter = {
        ...DEFAULT_CHARACTER,
        name: `Character ${characters.length + 1}`,
      };
      nextCharacters.push(newCharacter);
      return nextCharacters;
    });
  };

  const getRemainingAttributePoints = function (characterIndex) {
    const { attributes } = characters[characterIndex];
    const totalAttributes = Object.values(attributes).reduce((acc, item) => {
      acc += item;
      return acc;
    }, 0);

    return MAX_ATTRIBUTE_POINTS - totalAttributes;
  };

  const incrementAttribute = function ({ characterIndex, attributeName }) {
    setCharacters((characters) => {
      const nextCharacters = structuredClone(characters);

      if (getRemainingAttributePoints(characterIndex) === 0) return characters;

      nextCharacters[characterIndex].attributes[attributeName]++;

      return nextCharacters;
    });
  };

  const decrementAttribute = function ({ characterIndex, attributeName }) {
    setCharacters((characters) => {
      const nextCharacters = structuredClone(characters);
      nextCharacters[characterIndex].attributes[attributeName] -= 1;
      return nextCharacters;
    });
  };

  const getRemainingSkillPoints = function (characterIndex) {
    const { attributes, skills } = characters[characterIndex];
    // Characters have 10 + (4 * Intelligence Modifier) points to spend between skills
    const pointsToSpend = getPointsToSpend(
      getModifier(attributes["Intelligence"])
    );
    const totalSkillPoints = Object.values(skills).reduce((acc, value) => {
      acc += value;
      return acc;
    }, 0);
    return pointsToSpend - totalSkillPoints;
  };

  const incrementSkill = function ({ characterIndex, skillName }) {
    setCharacters((characters) => {
      const nextCharacters = structuredClone(characters);

      if (getRemainingSkillPoints(characterIndex) === 0) return characters;

      nextCharacters[characterIndex].skills[skillName] += 1;

      return nextCharacters;
    });
  };

  const decrementSkill = function ({ characterIndex, skillName }) {
    setCharacters((characters) => {
      const nextCharacters = structuredClone(characters);

      if (nextCharacters[characterIndex].skills[skillName] === 0)
        return characters;
      nextCharacters[characterIndex].skills[skillName] -= 1;

      return nextCharacters;
    });
  };

  const calcTotalSkills = function ({ characterIndex, skillName }) {
    const { attributeModifier } = SKILL_LIST.find(
      ({ name }) => name === skillName
    );
    const { skills, attributes } = characters[characterIndex];

    return skills[skillName] + getModifier(attributes[attributeModifier]);
  };

  return (
    <CharactersContext.Provider
      value={{
        addNewCharacter,
        incrementAttribute,
        decrementAttribute,
        incrementSkill,
        decrementSkill,
        calcTotalSkills,
        getRemainingAttributePoints,
        getRemainingSkillPoints,
        characters,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
}
