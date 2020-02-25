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
    const [sortScore, setSortScore] = useState(true);
    const [sortName, setSortName] = useState(true);
let scorelist = scores;


const sortByScore = () => {
    if(sortScore === true){
    scorelist = scores.sort(function(a, b){return b.score - a.score} )
    setSortScore(false)
    } else {
    scorelist = scores.sort(function(a, b){return a.score - b.score})
    setSortScore(true)
}
} 
const sortByName = () => {
    if(sortName === true){
    scorelist = scores.sort(function (a,b){
        if (a.username < b.username){return -1}
        if (a.username > b.username){return 1}
        return 0;
    })
    setSortName(false)
    } else {
    scorelist = scores.sort(function (a,b){
        if (a.username > b.username){return -1}
        if (a.username < b.username){return 1}
        return 0;
    })
    setSortName(true)
}
}
const userSort = sortName ? <i className="fa fa-caret-up" aria-hidden="true"></i>: <i className="fa fa-caret-down" aria-hidden="true"></i>

const scoreSort = sortScore ? <i className="fa fa-caret-up" aria-hidden="true"></i>: <i className="fa fa-caret-down" aria-hidden="true"></i>

return(
        <div> 
           
            <table className ="score">
                <thead>
                <tr>
                    <th onClick = {e => sortByName()}>Username {userSort}</th>
                    <th onClick = {e => sortByScore()}>Score {scoreSort}</th>
                </tr> 
                </thead>
               <tbody>
            {scorelist.map(score => <Score key={score.score_id} score={score}/>)} 
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