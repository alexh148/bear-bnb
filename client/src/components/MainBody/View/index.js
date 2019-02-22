import React, { Component } from 'react';
import axios from "axios";

class DateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {from: '', to: ''};
    this.currentFrom = "";
    this.currentTo = "";
    this.myVar = ""

    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFromChange(event) {
    this.currentFrom = event.target.value;
  }

  handleToChange(event) {
    this.currentTo = event.target.value;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({from: this.currentFrom, to: this.currentTo});
  }


  render() {
    return (
      <p>
        <span> From: </span>
        <span> To: </span>
        <form onSubmit={this.handleSubmit}>
          <input type="date" onChange={this.handleFromChange}/>
          <input type="date" onChange={this.handleToChange}/>
          <br></br>
          <br></br>
          <input type="submit" value="View available listings"></input>
          <PropertyListContainer dates={this.state}/>
        </form>
      </p>
    )
  }
}

class PropertyListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = ({data: ['hello']});
  }




  getData = function () {
    return fetch('http://localhost:3001/api/getData').then(function(response){
      return response.json().then((data) => {
        return data.data
      })
    })
  }

  setData() {
    this.getData().then((resp)=> this.setState({data: resp}))
  }


  componentDidMount(){
    this.setData()

  }

  // componentWillReceiveProps(nextProps) {
  //   this.getData();
  // }

  render() {
    return (
      <div>
      <PropertyList data={this.state.data} />
      </div>
    )
  }
}

const PropertyList = ({ data }) => {
  function showListingData(data){
    var info = []
    for (let i = 0; i < data.length; i++) {
      info.push(<ul id="houselistings"><br></br>
      {data[i].title}<br></br>
      {data[i].description}<br></br>
      {data[i].price}<br></br>
      </ul>)
    }
    return info
  }
  return(
    <div>
      <p id="availableRooms">
      {showListingData(data)}
      </p>

    </div>
  )
}

export default DateForm;


// <Link to="/spaces/new">List a space</Link><br></br>
