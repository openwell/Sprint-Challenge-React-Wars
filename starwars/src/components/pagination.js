import React from "react";
import "./StarWars.scss";

const pagination = props => {
  return (
    <>
      <button
        className={"Pagination"}
        disabled={props.disabled}
        onClick={()=>props.click(props.id)}
      >
        {props.name}
      </button>
    </>
  );
};

export default pagination;
