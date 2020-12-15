import './App.css';
import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
      movieData: [],
      movieAverage: 0,
      searchedItem: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({searchedItem: event.target.value});
  }

  handleSubmit(event) {
    console.log('test')
    console.log('SEARCHED!', this.state.searchedItem)
    event.preventDefault();
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
      </div>
    )}
}





export default App;
