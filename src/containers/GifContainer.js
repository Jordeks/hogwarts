import React, { Component } from 'react'
import PigGifs from '../components/PigGifs'

export default class GifContainer extends Component {
  state = {
    gifs: []
  }

clickHandler = () => {
  fetch(`https://api.giphy.com/v1/gifs/search?q=pig&api_key=uKFyXF07sDlLm4bpGXZL0tykeSCeLzKM&rating=g`)
    .then(res => res.json())
    .then(({data}) => this.setState({gifs: data.slice(0, 6)}))
}

render() {
  return (
    <div>
      
      <PigGifs gifs = {this.state.gifs} clickHandler={this.clickHandler} />
    </div>
  )
}
}
