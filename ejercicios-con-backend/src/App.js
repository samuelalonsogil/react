import './App.css';
import NavBar from "./components/NavBar";
import {Route, Routes} from "react-router-dom";
import ScoresInserted from "./components/ScoresInserted";

function App() {
  return (
      <div>
        <NavBar/>
          <Routes>
              <Route path="/scoresInserted" element = {<ScoresInserted/>} />
          </Routes>
      </div>
  );
}

export default App;
