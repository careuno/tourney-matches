import './App.css';
import MatchList from './components/MatchList';
import PlayerList from './components/PlayerList';
import matchData from './data/matchData'
import playerData from './data/playerData'
import { preparePlayerData, addWinsToPlayers } from './helpers/playerHelpers'

function App() {

  console.log('playerData--->', playerData)
  const playerDataArray = preparePlayerData(playerData);
  console.log('playerDataArray--->', playerDataArray)
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);
  console.log('parsedPlayerData', parsedPlayerData)
  //const player1 = parsedPlayerData[2] 

  return (
    <div className="App">
      <h1>
        Tourney Matches {" "}
        <span>Where Coding and Tournaments found their Match!</span>
      </h1>
      {/* You don't want spread operator because you would be sending a bunch of object without the order of the whole array, you'd only do spread operator if you have keys you are wanting to pass */}
      <PlayerList parsedPlayerData={parsedPlayerData} />
      <MatchList matchData={matchData}/>
    </div>
  );
}

/* 

<MatchList "PROPS"  />
PROPS = any attribute for the tag 
eg. 
   <MatchList matchData={matchData} abc={"1,2,3"}/>
props = {
  matchData: matchData,
  abc: "1,2,3"
}


So when you are passing the prop to MatchList, you need to reference the key to access the value/array of matchData, either by saying prop.matchData or by doing object destructuring 

const { keyname } = props //TH4 you can reference the value of that key later without reference the object it's attach to


*/
export default App;
