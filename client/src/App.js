import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar';
import ViewHeader from './components/Header/View';
import AddHeader from './components/Header/Add';
import BookHeader from './components/Header/Book';
import DateForm from './components/MainBody/View';
import AddMain from './components/MainBody/Add';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  // our delete method that uses our backend api
  // to remove existing database information
  deleteFromDB = idTodelete => {
    let objIdToDelete = null;
    this.state.data.forEach(dat => {
      if (dat.id === idTodelete) {
        objIdToDelete = dat._id;
      }
    });
    // LOOK HERE
  render() {
    return (
      <Router>
        <div className="App">

        <NavBar />
        <p id="header">
        <Route exact path = "/spaces" component={ViewHeader} />
        <Route exact path = "/spaces/book" component={BookHeader} />
        <Route exact path = "/spaces/new" component={AddHeader} />
        </p>
        <p id='mainbody'>
          <Route exact path = "/spaces" component={DateForm} />
          <Route exact path = "/spaces/new" component={AddMain} />
        </p>
        <Footer />
        </div>
      </Router>
    );
  };
};


//LOOK HERE
  // our update method that uses our backend api
  // to overwrite existing data base information
  updateDB = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    this.state.data.forEach(dat => {
      if (dat.id === idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });




export default App;
