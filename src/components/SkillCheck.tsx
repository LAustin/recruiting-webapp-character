import { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import { SKILL_LIST } from "../constants/consts";
import { generateRoll } from "../helpers/helpers";
import { useCharacters } from "./CharactersProvider";

const Divider = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  width: 100%;
  margin-bottom: 2rem;
`;

const StyledResults = styled.div`
  width: 100%;
`;

const StyledSelect = styled.select`
  margin-top: 0.5rem;
  width: 60%;
`;

const StyledLabel = styled.label`
  width: 100%;
`;

const StyledInput = styled.input`
  margin-top: 0.5rem;
  width: 60%;
`;

export default function SkillCheck({ characterIndex }) {
  const [roll, setRoll] = useState(null);
  const [skillName, setSkillName] = useState(SKILL_LIST[0].name);
  const [inputValue, setInputValue] = useState("");
  const { calcTotalSkills } = useCharacters();

  const rollDice = function () {
    setRoll(generateRoll());
  };

  const selectSkill = function (e) {
    setSkillName(e.target.value);
  };

  const onInputChange = function (e) {
    setInputValue(e.target.value);
  };

  const skillPoints = calcTotalSkills({ characterIndex, skillName });

  return (
    <Card>
      <div>Skill Check</div>
      <StyledLabel>
        <div>Skill:</div>
        <StyledSelect value={skillName} onChange={selectSkill}>
          {SKILL_LIST.map(({ name }) => {
            return (
              <option key={name} value={name}>
                {name}
              </option>
            );
          })}
        </StyledSelect>
      </StyledLabel>
      <StyledLabel>
        <div>DC:</div>
        <StyledInput
          type="number"
          placeholder="Min value required to succeed"
          value={inputValue}
          onChange={onInputChange}
        />
      </StyledLabel>
      <button type="submit" onClick={rollDice}>
        Roll
      </button>
      {roll && (
        <StyledResults>
          <Divider />
          <div>
            Skill: {skillName} {skillPoints}
          </div>
          <div>Roll: {roll}</div>
          <div>Total: {skillPoints + roll}</div>
          <div>DC: {inputValue}</div>
          <div>
            Result:{" "}
            {roll + skillPoints >= Number(inputValue) ? "Success" : "Failure"}
          </div>
        </StyledResults>
      )}
    </Card>
  );
}
