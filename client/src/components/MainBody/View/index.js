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
    this.currentTo = event.target.value
  }

  handleSubmit(event) {
    event.preventDefault();
    // var x = this.currentTo;
    // var y = this.currentFrom;
    // console.log(x);
    // console.log(y);
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
          <input id="button" type="submit" value="View available listings"></input>
          <br></br>
          <br></br>
        </form>
        <PropertyListContainer dates={this.state}/>
      </p>
    )
  }
}

class PropertyListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = ({data: [], dateFrom: '', dateTo: ''});
  }


  getSpecificDates = function (response){
    var filteredResults;
    var g1 = this.state.dateFrom;
    var g2 = this.state.dateTo;
    if (g1 && g2) {
      filteredResults = response.filter(function(x) { return (x.availableFrom <= g1) && (x.availableTo >= g2)});
      this.setState({data: filteredResults});
    } else {
      this.setState({data: response})
    }
  }

  getData = function () {
    return fetch('http://localhost:3001/api/getData').then(function(response){
      return response.json().then((data) => {
        return data.data
      })
    })
  }

  setData() {
    this.getData().then((resp)=> this.getSpecificDates(resp));
    console.log(this.state.dateFrom);
  }


  componentDidMount(){
    this.setData()
  }

  componentWillReceiveProps(nextProps) {
    this.setData();
    console.log(nextProps);
    this.setState({dateFrom: nextProps.dates.from, dateTo: nextProps.dates.to})
  }

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
    console.log(data);
    var info = []
    for (let i = 0; i < data.length; i++) {
      info.push(<div align='center' id="houselistings">
      <p id="housetitle">{data[i].title}</p><br></br>
      {data[i].description}<br></br>
      {data[i].price}<br></br>
      Available from: {data[i].availableFrom.substring(0, 10).split('-').reverse().join('-')}<br></br>
      Available to: {data[i].availableTo.substring(0, 10).split('-').reverse().join('-')}<br></br>
      </div>)
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
