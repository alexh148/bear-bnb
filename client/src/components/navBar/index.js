import React from'react';

const NavBar = (props) => (

  <header className="App-header">

  <ul>
    <img href="/" id="headerlogo" src={require('./Bearbnb4.png')} />
    <li><a className="active" href="#home">Log In</a></li>
    <li><a href="#news">Sign Up</a></li>
    <li><a href="/spaces">View Listings</a></li>
    <li><a href="/spaces/new">Add Listing</a></li>
  </ul>

  </header>
)

export default NavBar;
