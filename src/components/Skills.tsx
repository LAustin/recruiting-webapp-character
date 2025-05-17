import { SKILL_LIST } from "../constants/consts";
import Card from "./Card";
import styled from "styled-components";
import Skill from "./Skill";
import { useCharacters } from "./CharactersProvider";

const StyledSkills = styled.div`
  gap: 0.5rem;
  column-gap: 2rem;
  display: grid;
  grid-template-columns: 1fr 30px 60px 1fr repeat(3, 60px);
`;

const StyledText = styled.div`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
`;

export default function Skills({ characterIndex }) {
  const { getRemainingSkillPoints } = useCharacters();

  return (
    <Card>
      <div>Skills</div>
      <StyledText>
        Skill Points Available: {getRemainingSkillPoints(characterIndex)}
      </StyledText>
      <StyledSkills>
        {SKILL_LIST.map(({ name, attributeModifier }) => {
          return (
            <Skill
              characterIndex={characterIndex}
              key={name}
              attributeModifier={attributeModifier}
              name={name}
            />
          );
        })}
      </StyledSkills>
    </Card>
  );
}
