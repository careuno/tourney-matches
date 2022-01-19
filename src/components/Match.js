import React from 'react'; //optional if using older versions before v17



function Match(props) {
  const { players, winner, scoreDifference } = props;

  return (
    <article className="Match">
      <h1>
        {players[0]} <span>vs</span> {players[1]}
      </h1>
      {winner && <h2>{winner} is the winner by {scoreDifference}!</h2>}
      {!winner && <h2>No winners yet!</h2>}
    </article>
  );
}

export default Match;


/* https://web.compass.lighthouselabs.ca/days/w06e/activities/1239

Note that the code above that uses the && operator to short-circuit evaluate:

"Short Circuit Evaluation"

  {winner && <h2>{winner} is the winner by {scoreDifference}!</h2>}
  {!winner && <h2>No winners yet!</h2>}

This could have been written with a "ternary operator:""

  {winner ? <h2>{winner} is the winner by {scoreDifference}!</h2> : <h2>No winners yet!</h2>}

*/