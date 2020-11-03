import React, { Component } from "react";
import PigTile from './PigTile'

class PigsList extends Component {

  // constructor() {
  //   super()
  //   this.state = {
  //     name: '',
  //     specialty: '',
  //     greased: '',
  //     weight: '',
  //     'height medal achieved': '',
  //   }
  // }

  generatePigTiles = () => {
    return this.props.hogs.map((data, i) => {
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
      <div className='ui grid container ui cards'>
        {this.generatePigTiles()}
      </div>
    );
  }
}

export default PigsList;
