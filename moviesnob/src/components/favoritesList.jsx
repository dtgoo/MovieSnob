  import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "../index.css";
import FavoritesItem from './favoritesItem.jsx'


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  // { width: 550, itemsToShow: 2 },
  // { width: 768, itemsToShow: 3 },
  // { width: 1200, itemsToShow: 4 },
];

function favoritesList(props) {

  return (
    <>
      <div className="App">
        <div>Here's your list of Favorites..</div>
        <Carousel breakPoints={breakPoints}>
          {
          props.favoritesData.map((movie, index) => (
            <FavoritesItem
            currentMovie={props.favoritesData[index]}/>
          ))
          }
        </Carousel>
      </div>
    </>
  );
}

export default favoritesList
