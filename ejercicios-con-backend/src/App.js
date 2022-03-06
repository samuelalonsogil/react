import './App.css';
import NavBar from "./components/NavBar";
import {Route, Routes} from "react-router-dom";
import ScoresInserted from "./components/ScoresInserted";
import ScoresForm from "./components/ScoresForm";
import ListScoresGtThanValue from "./components/ListScoresGtThanValue";
import LogUser from "./components/LogUser";
import DeleteAllScores from "./components/DeleteAllScores";
function App() {
  return (
      <div>
        <NavBar/>
          <Routes>
              <Route path="/scoresInserted" element = {<ScoresInserted/>} />
              <Route path="/formScores" element = {<ScoresForm/>} />
              <Route path='/formScoresFiltered' element = {<ListScoresGtThanValue/>}/>
              <Route path='/formLogUser' element = {<LogUser/>}/>
              <Route path='/deleteAllScores' element = {<DeleteAllScores/>}/>

          </Routes>
      </div>
  );
}

export default App;
