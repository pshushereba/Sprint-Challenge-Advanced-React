import React from 'react';

const Player = (props) => {
  console.log("Player.js", props)
    return (
    <>
      <h3>{props.name}</h3>
      <p>{props.country}</p>
      <p>{props.searches}</p>
    </>
  );
}

export default Player;