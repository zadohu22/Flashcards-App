import SignUp from "./components/SignUp";
import RouteSwitch from "./Router/RouteSwitch";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <RouteSwitch />
    </Router>
  );
}

export default App;
