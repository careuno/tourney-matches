import React from 'react'; //optional if using older versions before v17


function Player(props) {

  return (
    <article className="Player">
      <h1>
        {props.firstName} <span>{props.gamerTag}</span>{props.lastName}
      </h1>
      {/* To be shown when there are no wins */}
      {!props.wins && <h2 className="zero">Currently with no wins</h2>}
      {props.wins === 1 && <h2>Currently at 1 win</h2>}
      {props.wins > 1 && <h2>Currently at 1+ wins</h2>}
    </article>
  );
}

export default Player;



//OR DECONSTRUCT SO YOU DON'T NEED TO DO PROPS.[" "] also using ternary operator WORKS EITHER WAY

// function Player(props) {
// const { firstName, gamerTag, lastName, wins } = props

//   return (
//     <article className="Player">
//       <h1>
//         {firstName} <span>{props.gamerTag}</span>{props.lastName}
//       </h1>
//       {/* To be shown when there are no wins */}
//       {!wins ? <h2 className="zero">Currently with no wins</h2> 
//       : wins === 1 ? <h2>Currently at 1 win</h2> 
//       : <h2>Currently at 1+ wins</h2>}
//     </article>
//   );
// }

// export default Player;











// player 1= {
//   gamerTag: "Disguised Lizard",
//   firstName: "Daria ",
//   lastName: "Stark",
//   wins: 1
// }