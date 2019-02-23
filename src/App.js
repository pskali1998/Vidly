import React, { Component } from 'react';
//import Movies from './components/movies';
import './App.css';
//import TableMovies from './components/tableMovie';
import NewCompo from './components/newCompo';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
        <NewCompo />
        </main>
      </React.Fragment>
      
     
     
    );
  }
}

export default App;
