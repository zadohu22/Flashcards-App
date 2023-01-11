import SignUp from "./components/SignUp";
import RouteSwitch from "./Router/RouteSwitch";
import { BrowserRouter as Router } from "react-router-dom";
import FlashcardDefinition from "./components/Flashcard-Types/FlashcardDefinition";

function App() {
  return (
    // <Router>
    //   <RouteSwitch />
    // </Router>
    <FlashcardDefinition term='Flashcard Title' definition='Definition' />
  );
}

export default App;
