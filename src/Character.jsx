import React from "react";

export default function Character(props) {
  return (
    <div className="person">
      <img src={props.img} alt={props.name} />
      <div>
        <h4>{props.name}</h4>
        <p>{props.age} Years</p>
      </div>
    </div>
  );
}

