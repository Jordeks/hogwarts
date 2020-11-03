import React, { Component } from 'react'
import PigTile from './PigTile';

export default class Filter extends Component {

  filterPigs = () => {
    let filteredPigs = this.props.hogs.filter(pig => pig.greased === true)
    console.log(filteredPigs)
    return filteredPigs.map((data, i) => {
      return <PigTile key={i} 
      name={data['name']} 
      specialty={data['specialty']} 
      greased={data['greased']}
      weight={data['weight']}
      heightMedalAchieved={data['highest medal achieved']} />
    })
    
    
  }

  render() {
    return (
      <div onClick={this.filterPigs}>
        <button>Filter for Greased Pigs</button>
      </div>
    )
  }
}
