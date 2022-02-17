import React from 'react';

const Player = (props) => {
  console.log("Player.js", props)
    return (
    <div className="cardContainer">
        <div className="playerCard">
        <h3>Player: {props.name}</h3>
        <p>Country: {props.country}</p>
        <p>Search Volume: {props.searches}</p>
    </div>
    </div>

  );
}

export default Player;