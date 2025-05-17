import styled from "styled-components";
import Attributes from "./Attributes";
import Classes from "./Classes";
import Skills from "./Skills";
import SkillCheck from "./SkillCheck";
import Card from "./Card";

const StyledSection = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
`;

const StyledCharacter = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const StyledTitle = styled.div`
  font-size: 1.5rem;
`;

export default function Character({ character, characterIndex }) {
  return (
    <StyledCharacter>
      <Card>
        <StyledTitle>{character.name}</StyledTitle>
      </Card>
      <StyledSection>
        <Attributes characterIndex={characterIndex} />
        <Classes characterIndex={characterIndex} />
      </StyledSection>
      <StyledSection>
        <Skills characterIndex={characterIndex} />
        <SkillCheck characterIndex={characterIndex} />
      </StyledSection>
    </StyledCharacter>
  );
}
