import react, { useState, useEffect } from "react";
import Task from "../Task.js";

const Card = (props) => {

  function handleClick() {
    props.onDelete(props.id)
  }

  return (
    <div id="card">
      <h1>{props.task}</h1>
      <p>{props.defination}</p>
      <button onClick={handleClick}>Done</button>
    </div>
  );
};
export default Card;
