import React, { Component } from 'react'

export class ClassClick extends Component {
    clickhandel(){
     console.log('Class Clicked')
   }
  render() {
    return (
      <div>
        <button onClick={this.clickhandel}>Class Click</button>
      </div>
    )
  }
}

export default ClassClick
