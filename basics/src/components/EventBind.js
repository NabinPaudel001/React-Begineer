import React, { Component } from 'react'

class EventBind extends Component {
  constructor(props) {
    super(props)
    this.update = this.update.bind(this)
    this.state = {
         message: 'Hello Nabin'
    }
  }
  update(){
    this.setState({
      message: 'Goodbye!'
    })
  }
  
    render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.update.bind}>Click</button>  Throws error */}
        {/* <button onClick={this.update.bind(this)}>Click</button>    Correct     */}
        {/* <button onClick={()=>this.update()}>Click</button> Correct */}
        <button onClick={this.update}>Click</button>
      </div>
    )
  }
}

export default EventBind
