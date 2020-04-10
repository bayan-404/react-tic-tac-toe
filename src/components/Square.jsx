import React from "react";

function Square(props) {
  // when change it to function they removed the "this"
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;
