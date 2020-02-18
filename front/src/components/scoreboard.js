import React from 'react';
import '../App.css';

const Score = ({score}) => {
    return(
            <tr>
                <td>{score.username}</td><td>{score.score}</td>
          </tr>
        
    )
}

const Scoreboard = ({scores}) => {
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
            {scores.map(score => <Score key={score.id} score={score}/>)} 
             </tbody>
            </table>
        </div>
    )
}

export default Scoreboard;