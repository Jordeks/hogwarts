import React, { Component } from "react";
import PigTile from './PigTile'

class PigsList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pigs: props.hogs,
      filteredPigs: props.hogs,
    }
  }

  filterPigs = () => {
    let filteredPigs = this.state.pigs.filter(pig => pig.greased === true)
    this.setState({
      filteredPigs: filteredPigs
    })
  }

  sortPigsName = () => {
    let sortedNames = this.state.filteredPigs
    .sort((a, b) => a.name.localeCompare(b.name))
    this.setState({
      filterPigs: sortedNames
    })
  }

  sortPigsWeight = () => {
    let sortedWeight = this.state.filteredPigs
      .sort((a, b) => a.weight - b.weight)
    this.setState({
      filteredPigs: sortedWeight
    })
  }

  generatePigTiles = () => {
    return this.state.filteredPigs.map((data, i) => {
      return <PigTile key={i} 
        name={data['name']} 
        specialty={data['specialty']} 
        greased={data['greased']}
        weight={data['weight']}
        heightMedalAchieved={data['highest medal achieved']}   />
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.filterPigs}>Filter Pigs</button>
        <button onClick={this.sortPigsName}>Sort by Name</button>
        <button onClick={this.sortPigsWeight}>Sort by Weight</button>
        <div className='ui grid container ui cards' >
          {this.generatePigTiles()}
        </div>
      </div>
    );
  }
}

export default PigsList;
