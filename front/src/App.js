import React, {useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Scoreboard from './components/scoreboard';


const serviceUrl= "/score"

function App() {
  const [scores,setScores] =useState([]);
  const hook =() =>{
    axios
    .get(serviceUrl)
    .then(response => {
      setScores(response.data)
    })
  }
  useEffect(hook,[])

  const addScore = (e,newUser,newScore) =>{
    e.preventDefault();
    const newHighscore = {
      username: newUser,
      score: newScore

    }
axios.post(serviceUrl, newHighscore)
.then(response => {
  setScores(scores.concat(response.data));
}
  )
}
  return (
    <div className="App">
      <header className="App-header">
      <h1>Highscore</h1>
      </header>
      <section>
          <Scoreboard scores = {scores} addScore = {addScore}/>
      </section>
    </div>
  );
}

export default App;
