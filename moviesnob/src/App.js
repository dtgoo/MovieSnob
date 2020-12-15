import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import StagingCard from './components/stagingCard.jsx'
import FavoritesList from './components/favoritesList.jsx'

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
    console.log('CurrentMovie', response.data)
    this.setState({
      currentMovie: response.data
    })

  }
    )}

  addToFavorites(movieData) {
    console.log('Rotten Tomatoes!: ', movieData.Ratings[1].Value)
    let newArray = this.state.favoritesData.concat(movieData);
    let reviewArray = this.state.reviewData.concat(movieData.Ratings[1].Value)
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
       <FavoritesList reviewData={this.state.reviewData} favoritesData={this.state.favoritesData}/>
      </div>
    )}
}





export default App;
