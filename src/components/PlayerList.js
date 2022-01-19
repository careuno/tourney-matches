import React from 'react'; //optional if using older versions before v17
//import matchData from '../data/matchData' ---- we passed matchData from App.js as a prop
//import playerData from '../data/playerData'---- we passed matchData from App.js as a prop
import Player from './Player.js';
//import { preparePlayerData, addWinsToPlayers } from '../helpers/playerHelpers';



function PlayerList(props) {
  const { parsedPlayerData } = props
  //console.log('parsedPlayerData typeof---->', (typeof parsedPlayerData)) //Returns Object?
  //console.log('parsedPlayerData---->', ( parsedPlayerData)) //Prototype  - Array
  //console.log('playerData', playerData)

  // This loop works, or you can use .map
  // const listOfPlayers = [];
  // for (const onePlayer of parsedPlayerData) {
  //   listOfPlayers.push(<Player{...onePlayer}/>)
  // }
  const listOfPlayers = parsedPlayerData.map((onePlayer)=> <Player key={onePlayer.gamerTag} {...onePlayer} />);
  
 //listOfPlayers is an array of components, and your browser needs to reference the components by a key https://reactjs.org/link/warning-keys
 //Since we re-render our components each time we have state changes, we don't want to slow down our app by redoing everything. Keys help to only re-render what is needed to re-render. Therefore using key reference.


  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {/* the next line, destructures player1 key value pairs added as props to Player ... props = {...player1} so props.gamerTag === "Disguised Lizard" */}
      {listOfPlayers}
    </section>
  );
}

//When you are creating your JSX component for a list, you need to iterate over the data array either with a loop or map for brevity, and then assign that to a variable that you reference between {} inside your return

export default PlayerList;

//React.. think about the project like a tree, component tree.. App.js would be passing props to the components there... 'props' would flow down the tree



// player 1= {
//   gamerTag: "Disguised Lizard",
//   firstName: "Daria ",
//   lastName: "Stark",
//   wins: 1
// }


//--------------THIS IS FROM PREVIOUS STEP: RENDER ONE PLAYER ------------------------------
// import React from 'react'; //optional if using older versions before v17
// import matchData from '../data/matchData'
// import playerData from '../data/playerData'
// import Player from './Player.js';
// import { preparePlayerData, addWinsToPlayers } from '../helpers/playerHelpers';



// function PlayerList() {
//   //console.log('playerData', playerData)
//   const playerDataArray = preparePlayerData(playerData);
//   const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);
//   //console.log('playerDataArray--->', playerDataArray)
//   //console.log('parsedPlayerData', parsedPlayerData)
//   const player1 = parsedPlayerData[2] 
//   return (
//     <section className="PlayerList">
//       <h1>Current participating players</h1>
//       {/* the next line, destructures player1 key value pairs added as props to Player ... props = {...player1} so props.gamerTag === "Disguised Lizard" */}
//       <Player{...player1}/>
//     </section>
//   );
// }

// export default PlayerList;

