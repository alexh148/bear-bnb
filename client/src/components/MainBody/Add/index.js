import React, { Component } from 'react';
import axios from "axios";

class AddMain extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.desc = "";
    this.price = "";

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
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

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit} >
        Title: <input type="text" onChange={this.handleTitleChange} /><br/><br/>
        Description: <input type="text" onChange={this.handleDescChange} /><br/><br/>
        Price: <input type="text" onChange={this.handlePriceChange} /><br/><br/>
        <button type="submit"> Add Listing </button>
      </form>
      </div>
    )
  }



}




export default AddMain;
