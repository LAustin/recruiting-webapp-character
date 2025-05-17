import { useState } from "react";
import styled from "styled-components";
import Class from "./Class";
import { CLASS_LIST } from "../constants/consts";
import Card from "./Card";

const StyledClasses = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledRequirements = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export default function Classes({ characterIndex }) {
  const [selectedClass, setSelectedClass] = useState(null);

  return (
    <>
      <Card>
        <div>Classes</div>
        <StyledClasses>
          {Object.entries(CLASS_LIST).map(([classType, minimumReqs]) => (
            <Class
              key={classType}
              classType={classType}
              minimumReqs={minimumReqs}
              setSelectedClass={setSelectedClass}
              characterIndex={characterIndex}
            />
          ))}
        </StyledClasses>
      </Card>
      {selectedClass && (
        <Card>
          <div>{selectedClass} Minimum Requirements</div>
          <StyledRequirements>
            {Object.entries(CLASS_LIST[selectedClass]).map(
              ([attribute, number]) => {
                return <div key={attribute}>{`${attribute}: ${number}`}</div>;
              }
            )}
            <button onClick={() => setSelectedClass(null)}>
              Close Requirements
            </button>
          </StyledRequirements>
        </Card>
      )}
    </>
  );
}
