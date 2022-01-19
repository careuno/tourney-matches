import React from 'react'; //optional if using older versions before v17
//import matchData from '../data/matchData' ---- we passed matchData from App.js as a prop
import Match from './Match.js';

function MatchList(props) {
  //reference the records of data you want to display in your component
  const { matchData } = props

  //const matchData = props.matchData// ----> this works if you don't want to do object destructuring as seen in line 7

  //Since you already have the red tag referencing the component in this variable parsedMatches, you don't need to reference it again in your return, just state the variable. See line 24.

  const parsedMatches = matchData.map(match => <Match  key={match.matchNumber} {...match} />);
  //parsedMatches is an array of components, and your browser needs to reference the components by a key https://reactjs.org/link/warning-keys
  //Since we re-render our components each time we have state changes, we don't want to slow down our app by redoing everything. Keys help to only re-render what is needed to re-render. Therefore using key reference.

  //if you don't want to use the spread operator, you can reference the keys of each object element in the matchData array, with the .map, the parameter 'match' is one element or the first object in the array. BUT spread operator is just easier.

        // const parsedMatchesAlternative = matchData.map(match => <Match matchNumber={match.matchNumber} players={match.players} winner={match.winner} scoreDifference={match.scoreDifference} />);

  //As seen in line 17.. you pass the values of that object from the data as properties to your Match component.. TH4 props is players=, winners=, scoreDifference=... see Match.js
  
  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {parsedMatches}
    </section>

  );
}


export default MatchList;
