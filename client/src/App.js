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


export default App;
