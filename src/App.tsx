import styled from "styled-components";
import "./App.css";
import AddCharacter from "./components/AddCharacter";
import Characters from "./components/Characters";
import SaveCharacter from "./components/SaveCharacter";
import { CharactersProvider } from "./components/CharactersProvider";

const StyledMain = styled.div`
  flex: 1 1 0;
  background-color: hsl(220deg 13% 13%);
  color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

const StyledButtons = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  justify-content: center;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <CharactersProvider>
        <StyledMain>
          <StyledButtons>
            <AddCharacter />
            <SaveCharacter />
          </StyledButtons>
          <Characters />
        </StyledMain>
      </CharactersProvider>
    </div>
  );
}

export default App;
