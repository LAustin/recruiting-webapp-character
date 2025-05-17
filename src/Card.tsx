import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(16, 19, 22, 1);
  padding: 2rem;
  border-radius: 6px;
  gap: 1.5rem;
  flex: 1;
`;

export default function Card({ children }) {
  return <StyledCard>{children}</StyledCard>;
}
