import React from 'react';
import Player from './Player.js';

const PlayerList = (props) => {
  console.log("PlayerList", props);
     return (
         <>
        {props.players.map( player => (
        <Player 
          key={player.id} 
          name={player.name} 
          country={player.country}
          searches={player.searches}
        />
      ))}
</>   
)
}

export default PlayerList;