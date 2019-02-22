import React, { Component } from 'react';
import axios from "axios";

class AddMain extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.desc = "";
    this.price = "";
    this.availableFrom = "";
    this.availableTo = "";

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleavailableFromChange = this.handleavailableFromChange.bind(this);
    this.handleavailableToChange = this.handleavailableToChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.price);
    axios.post("http://localhost:3001/api/putData", {
      id: 3,
      title: this.title,
      description: this.desc,
      price: this.price,
      availableFrom: this.availableFrom,
      availableTo: this.availableTo
    });
  }

  handleTitleChange(event) {
    this.title = event.target.value;
  }

  handleDescChange(event) {
    this.desc = event.target.value;
  }

  handlePriceChange(event) {
    this.price = event.target.value;
  }

  handleavailableToChange(event) {
    this.availableTo = event.target.value;
  }

  handleavailableFromChange(event) {
    this.availableFrom = event.target.value;
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit} >
        Title: <input type="text" onChange={this.handleTitleChange} /><br/><br/>
        Description: <input type="text" onChange={this.handleDescChange} /><br/><br/>
        Price: <input type="text" onChange={this.handlePriceChange} /><br/><br/>
        Available From: <input type="date" onChange={this.handleavailableFromChange} /><br/><br/>
        Available To: <input type="date" onChange={this.handleavailableToChange} /><br/><br/>
        <button type="submit"> Add Listing </button>
      </form>
      </div>
    )
  }
}




export default AddMain;
