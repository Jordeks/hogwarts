import React, { Component } from 'react'

export default class PigGifs extends Component {

  displayGifs = () => {
    return this.props.gifs.map(gif => {
      return <li key={gif.id}>
        <img src={gif.images.original.url} alt={gif.title} />
      </li>
    })
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.props.clickHandler}>Would you like to see Pig Gifs?</button>
        </div>
        <ul>
          {this.displayGifs()}
        </ul>
      </div>
    )
  }
}
