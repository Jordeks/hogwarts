import React, { Component } from "react";

export default class PigTile extends Component {

  state = {
    details: false,
    showing: true,
  }

  imageGetter = () => {
    let formattedName = this.props.name.toLowerCase().split(' ').join('_')
    let pigImage = require(`../hog-imgs/${formattedName}.jpg`)
    return pigImage
  } 

  displayDetails = () => {
    // console.log(`${this.props.name} was clicked - greased? ${this.props.greased}`)
    this.state.details === false ? this.setState({ details: true }) : this.setState({ details: false})
  }

  hidePiggie = () => {
    this.setState({
      showing: false, 
      details: false
    })
  }

  render() {
    if (this.state.showing === false) {
      return null
    } else if (this.state.details === false) {
      return (
        <div className='ui eight wide column card'>
        <div className='image' onClick={this.displayDetails}>
          <img src={this.imageGetter()} />
        </div>
        {this.props.name}
        <button onClick={this.hidePiggie}>Hide Piggie</button>
      </div>
      )
    } else if (this.state.details === true){
      return (
        <div className='ui eight wide column card'>
        <div className='image' onClick={this.displayDetails}>
          <img src={this.imageGetter()} />
        </div>
          <p>Name: {this.props.name}</p>
          <p>Specialty: {this.props.specialty}</p>
          <p>Greased? {this.props.greased.toString()}</p>
          <p>Weight: {this.props.weight}</p>
          <p>Height Medal Achieved: {this.props.heightMedalAchieved}</p>
      </div>
      )
    } 
  } 

}






















//////FUNCTIONAL COMPONENT
// const PigTile = (props) => {

//   function imageGetter(name){
//     let formattedName = name.toLowerCase().split(' ').join('_')
//     let pigImage = require(`../hog-imgs/${formattedName}.jpg`)
//     return pigImage
//   } 

//   return (
//     <div className='ui eight wide column card'>
//       <div className='image'>
//         <img src={imageGetter(props.name)} />
//       </div>
//       {props.name}
//     </div>
//   )
// } 

// export default PigTile