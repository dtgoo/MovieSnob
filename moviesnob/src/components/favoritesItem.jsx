import React from "react";
import ReactDOM from "react-dom";
import Item from "./Item";
import "../index.css";


function FavoritesItem(props) {
  return (
    <Item>
      {props.currentMovie.Title} <br/>
      RT: {props.currentMovie.Ratings[1].Value}
    </Item>
  );
}

export default FavoritesItem