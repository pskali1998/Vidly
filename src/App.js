import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
//import Movies from './components/movies';
//import TableMovies from './components/tableMovie';
import NewCompo from "./components/newCompo";
import Customers from "./components/customers";
import Rentals from "./components/rental";
import NotFound from "./components/notFound";
import NavBarH from "./components/navBarH";
import MoviesForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBarH />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MoviesForm} />
            <Route path="/movies" component={NewCompo} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
