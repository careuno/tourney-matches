// export const preparePlayerData = function(playerData) {
//   const playerDataArray = Object.values(playerData);
//   return playerDataArray;
// };
export const preparePlayerData = (playerData) => {
  console.log('Object.values(playerData)---->', Object.values(playerData))
  return Object.values(playerData);
};


export const addWinsToPlayers = (playerDataArray, matchData) => {
  return playerDataArray.map(player => {
    // Calculating the number of wins in the matchData
    const currentWins = matchData.reduce((accumulator, match) => {
      // Adds a win if the gamerTag matches
      if (match.winner === player.gamerTag) {
        return accumulator += 1;
      } else {
        return accumulator;
      }
    }, 0);

    // Assigns the value to the wins key
    player.wins = currentWins;

    return player
  });
}

 // output: [{player}, {player}] (each player having a win key and a numerical value)



// export const addWinsToPlayers = (playerDataArray, matchData) => {

//   const reducer = (previousValue, currentValue) => previousValue + currentValue;
//   for (let i = 0; i < playerDataArray.length; i++){
//      playerDataArray[i].wins = player
//     }
//     matchData.reduce(reducer, playerDataArray[i].wins)
 // };
// export const addWinsToPlayers = (gamerTag, MatchData) => {
//   numOfNewWins = 0;
//   for (let i = 0; i < matchData.length; i++){
//     if (MatchData[i].winner === player) {
//       numOfNewWins += 1;
//     }
//   }
//   playerData[gamerTag].wins = numOfWins + numOfNewWins;
//   };




/* Knowing this, we could iterate over the array of matches for each player and count how many times their gamerTag shows up in the winner property of a match. Once we calculate this, we can add it as a property on the player object and then return a new array with updated players. */

// module.exports = { };