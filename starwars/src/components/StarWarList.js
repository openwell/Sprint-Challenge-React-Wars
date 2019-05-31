import React from "react";
import './StarWars.scss';

const starWarList = props => {
  return (
    <ul className={'StarWarsList'}>
      {props.list.map(element => (
        <li key={element.created}>{element.name}</li>
      ))}
    </ul>
  );
};

export default starWarList;
