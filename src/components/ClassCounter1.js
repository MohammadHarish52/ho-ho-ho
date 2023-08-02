import React, { Component } from 'react'

export class ClassCounter1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         name :''
      }
    }
    componentDidMount(){
        document.title = `clicked ${this.state.count} times`
    }
    componentDidUpdate(prevProps ,prevState){
        console.log('updating component title')
        if(prevState.count !== this.state.count )
        document.title = `clicked ${this.state.count} times`
    }
  render() {
    return (
      <div>
      <input type ="text" value ={this.state.name} onChange={(e)=>{
        this.setState({name:e.target.value})
      }}/>
        <button onClick = {()=> this.setState({
            count :this.state.count +1 
        })}>
clicked 
        </button>
      </div>
    )
  }
}

export default ClassCounter1