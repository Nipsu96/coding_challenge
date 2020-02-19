import React, {useState} from 'react';
import '../App.css';

const Score = ({score}) => {
    return(
            <tr>
                <td>{score.username}</td><td>{score.score}</td>
          </tr>
        
    )
}
const InputScore = ({addScore}) => {
    const [newScore,setNewscore] = useState("");
const [newUsername,setNewUsername] =useState ("");


const doSubmit = e => {
    if (newScore >= 0) {
  addScore (e,newUsername,newScore,);
    setNewscore("");
    setNewUsername("");
    }else {
        alert("Score can't be negative")
    }
  
}
    return(
        <form className ="score"onSubmit={e => doSubmit(e)}> 
        <input onChange ={e => setNewUsername(e.target.value)} type="text" placeholder="Username" required value={newUsername}/>
        <input onChange= {e => setNewscore(e.target.value)}type="text" placeholder="Score" required value={newScore} name=""/><br/>
        <button type= "submit">Send</button>
        </form>
    )
}

const Scoreboard = ({scores,addScore}) => {
    const [sort, setSort] = useState(false);
let scorelist = scores;

 

const myFunction = () => {
    if(sort === true){
    scorelist = scores.sort(function(a, b){return b - a} )
    } else {
    scorelist = scores.sort(function(a, b){return a - b})
}}

 

const nameButton = () => {
    scorelist = scores
    setSort(false)
}
//  console.log(scores)
    return(
        <div> 
           
            <table className ="score">
                <thead>
                <tr>
                    <th>Username</th>
                    <th>Score</th>
                </tr> 
                </thead>
               <tbody>
            {scorelist.map(score => <Score key={score.id} score={score}/>)} 
             </tbody>
            </table>
            <div className = "addScore">
                <h3>Add new highscore</h3>
            <InputScore scores ={scores} addScore = {addScore}/>
            </div>
        </div>
    )
}

export default Scoreboard;