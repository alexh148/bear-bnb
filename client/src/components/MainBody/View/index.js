import React, { Component } from 'react';

class DateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {from: '', to: ''};
    this.currentFrom = "";
    this.currentTo = "";

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
    event.preventDefault();;
    this.setState({from: this.currentFrom, to: this.currentTo})
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
    this.myVar = {props}
    this.state = {data: []}
  }

  getData(){
    console.log(this.myVar)
    this.setState({
      data: [
        {
          title: '3 bed spacious townhouse',
          price: '£50 per night',
          location: 'London'
        },
        {
          title: '10 bed mansion spaceship',
          price: '£400 per night',
          location: 'Space'
        }
      ]
    })
  }


  componentDidMount(){
    this.getData();
  }

  componentWillReceiveProps(nextProps) {
    this.myVar = nextProps.dates;
    this.getData();
  }

  render() {
    return (
      <div>
      <PropertyList data={this.state.data} />
      <p> Hey </p>
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
      {data[i].location}<br></br>
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
