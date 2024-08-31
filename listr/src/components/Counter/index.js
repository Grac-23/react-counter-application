import React, { Component } from 'react'

import "./index.css"

 class Counter extends Component {
    state ={count:0}
    increaseButton = () =>{
        console.log("Button Trigged")
       this.setState(prevState=>{
        console.log(prevState.count)
        return{
            count: prevState.count+1
        }

       })

      
       
    }

    drecementButton= () =>{
        console.log("decrease Button")
        this.setState(prevState=>{
            return{count : prevState.count-1}
        })

        
    }

    resetButton = () =>{
        this.setState({count : 0})
        
    }
  render() {
    const {count} = this.state
    const textColor = count > 0 ? "green" : count < 0 ? "Red" : "black"
    return (
        <div className="main-container">
             <h1   className="heading">Counter</h1>
             <h1 className="update" style ={{color:textColor}}>{count}</h1>
             <div>
                <button className="increment"  onClick={this.increaseButton}>Increment</button>
                <button  className="increment"   onClick = {this.resetButton}>Reset</button>
                <button  className="increment" onClick = {this.drecementButton}>Decrement</button>
                
             </div>
        </div>
     
    )
  }
}

export default Counter;