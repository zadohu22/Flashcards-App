import SignUp from "./components/SignUp";
import RouteSwitch from "./Router/RouteSwitch";
import { BrowserRouter as Router } from "react-router-dom";
import FlashcardDefinition from "./components/Flashcard-Types/FlashcardDefinition";
import FlashcardChoice from "./components/Flashcard-Types/FlashcardChoice";
import FlashcardBool from "./components/Flashcard-Types/FlashcardBool";
import BoolPreview from "./components/Flashcard-Types/BoolPreview";
import ChoicePreview from "./components/Flashcard-Types/ChoicePreview";
import DefinitionPreview from "./components/Flashcard-Types/DefinitionPreview";

function App() {
  return (
    <Router>
      <RouteSwitch />
    </Router>
    // <>
    //   <BoolPreview />
    //   <ChoicePreview />
    //   <DefinitionPreview />
    // </>
  );
}

export default App;
