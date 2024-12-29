import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
         parentName: 'Parent'   
    }
    this.greetParent = this.greetParent.bind(this)  // 1st approach
  }
  greetParent(){
    alert(`Hello ${this.state.parentName}`)
  }
  
    render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}/>  {/* 2nd approach */}
      </div>
    )
  }
}

export default ParentComponent
