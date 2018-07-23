import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <span onClick={() => props.ClickCard(props.id)} className="remove">
      Click me
    </span>
  </div>
);

export default FriendCard;
