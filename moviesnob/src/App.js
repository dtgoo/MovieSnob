import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import StagingCard from './components/stagingCard.jsx'
import FavoritesList from './components/favoritesList.jsx'
import DecisionData from './components/decision.jsx'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
      favoritesData: [],
      currentMovie: {},
      searchedItem: '',
      reviewData: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMovieData = this.getMovieData.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
  }


  handleChange(event) {
    this.setState({searchedItem: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getMovieData(this.state.searchedItem)
  }

  getMovieData(movieTitle) {
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=ea5a4616', {
      params: {
        t: movieTitle
      }
    })
    .then((response) => {
    this.setState({
      currentMovie: response.data
    })

  }
    )}

  addToFavorites(movieData) {
    // here you'll want to remove the percent sign and make an integer
    let reviewNumber = parseInt(movieData.Ratings[1].Value, 10);
    let newArray = this.state.favoritesData.concat(movieData);
    let reviewArray = this.state.reviewData.concat(reviewNumber)
    this.setState({
      favoritesData: newArray,
      reviewData: reviewArray

    })
  }


  render() {
    return(
      <div className="App">
        <header>
          MovieSnob
        </header>
        <form onSubmit={this.handleSubmit}>
          <label>
          Movie Title:
          <input type="text" onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
       <StagingCard currentMovie={this.state.currentMovie} addToFavorites={this.addToFavorites}/>
       <FavoritesList favoritesData={this.state.favoritesData}/>
       <DecisionData reviewData={this.state.reviewData}/>
      </div>
    )}
}





export default App;
