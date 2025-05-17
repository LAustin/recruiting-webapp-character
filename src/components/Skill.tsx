import { Fragment } from "react";
import styled from "styled-components";
import { useCharacters } from "./CharactersProvider";
import { getModifier } from "../helpers/helpers";

const StyledColumn = styled.div`
  text-align: left;
  white-space: nowrap;
`;

const StyledModifier = styled.span`
  color: rgba(255, 255, 255, 0.7);
`;

type SkillProps = {
  attributeModifier: string;
  name: string;
  characterIndex: number;
};

export default function Skill({
  attributeModifier,
  name,
  characterIndex,
}: SkillProps) {
  const { characters, incrementSkill, decrementSkill, calcTotalSkills } =
    useCharacters();
  const { attributes, skills } = characters[characterIndex];

  const modifier = getModifier(attributes[attributeModifier]);

  return (
    <>
      <StyledColumn>{name}:</StyledColumn>
      <StyledColumn>{skills[name]}</StyledColumn>
      <StyledColumn>
        <button
          onClick={() => decrementSkill({ characterIndex, skillName: name })}
        >
          -
        </button>
        <button
          onClick={() => incrementSkill({ characterIndex, skillName: name })}
        >
          +
        </button>
      </StyledColumn>
      <StyledColumn>
        <StyledModifier>Modifier:</StyledModifier> {attributeModifier}
      </StyledColumn>
      <StyledColumn>{modifier}</StyledColumn>
      <StyledColumn>Total:</StyledColumn>
      <StyledColumn>
        {calcTotalSkills({ characterIndex, skillName: name })}
      </StyledColumn>
    </>
  );
}
