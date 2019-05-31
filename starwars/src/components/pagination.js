import React from "react";
import "./StarWars.scss";

const pagination = props => {
  return (
    <>
      <button className={'Pagination'} disabled={props.disabled}>{props.name}</button>
    </>
  );
};

export default pagination;
