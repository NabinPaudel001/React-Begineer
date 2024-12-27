import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
         count: 0
    }
  }
  countp(){
    // this.setState({
    //     count: this.state.count + 1
    // })
    // console.log(this.state.count)
    this.setState((prevState)=>({
        count : prevState.count + 1
    }),()=>{console.log('Callback',this.state.count)})
}
incV(){

    this.countp()
    this.countp()
    this.countp()
    this.countp()
    this.countp()
}
    render() {
    return (
      <div>
        Count = {this.state.count}
        <button onClick={()=>this.incV()}>Incement</button>
      </div>
    )
  }
}

export default Counter
