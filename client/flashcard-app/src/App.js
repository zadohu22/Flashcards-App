import SignUp from "./components/SignUp";
import RouteSwitch from "./Router/RouteSwitch";
import { BrowserRouter as Router } from "react-router-dom";
import FlashcardDefinition from "./components/Flashcard-Types/FlashcardDefinition";
import FlashcardChoice from "./components/Flashcard-Types/FlashcardChoice";
import FlashcardBool from "./components/Flashcard-Types/FlashcardBool";

function App() {
  return (
    <Router>
      <RouteSwitch />
    </Router>
    // <>
    //   <FlashcardDefinition
    //     term={"test term"}
    //     definition={"this is the definition"}
    //   />
    //   <FlashcardChoice />
    //   <FlashcardBool />
    // </>
  );
}

export default App;
