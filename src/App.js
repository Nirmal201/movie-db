import React, { Component } from "react";
import Movies from "./components/Movies";
import NavBar from "./components/NavBar";
import { Switch, Route, Redirect } from "react-router-dom";
import Customers from "./components/Coustomers";
import Rental from "./components/Rentals";
import NotFound from "./components/NotFound";
import MovieForm from "./components/MovieForm";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rental" component={Rental} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
