import React from "react";

const starWarList = props => {
  return (
    <ul>
      {props.list.map(element => (
        <li key={element.created}>{element.name}</li>
      ))}
    </ul>
  );
};

export default starWarList;
