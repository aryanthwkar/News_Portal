import React, { Component } from 'react'
import loading from './loading.gif'
export class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={loading} alt="loading" style={{
            height:"50px"
        }} ></img>
      </div>
    )
  }
}

export default Spinner
