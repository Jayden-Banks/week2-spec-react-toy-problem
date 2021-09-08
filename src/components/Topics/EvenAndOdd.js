import React, { Component } from "react";


class EvenAndOdd extends Component {
  constructor() {
    super()
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    }
    // this.setEvenOdds = this.setEvenOdds.bind(this) //If I use a normal function, I have to bind it like this
  }

  onChangeHandle(input) {
    this.setState({userInput: input})
  }

  setEvenOdds = userInput => {
    let arr = userInput.split(',')
    let evens = []
    let odds = []

    arr.forEach(element => {
      if(element % 2 === 0) {
        evens.push(+element)
      } else {
        odds.push(+element)
      }
    });

    this.setState({ evenArray: evens, oddArray: odds })
    
  }


  render() {
    return(
      <div className="puzzleBox evenAndOddPB"> 
        <h4>EvenAndOdd</h4>
        <input className="inputLine" onChange={ (e) => this.onChangeHandle(e.target.value) }/>
        <button className="confirmationButton" onClick={() => { this.setEvenOdds(this.state.userInput) }}>Button</button>
        <span className="resultsBox">{ JSON.stringify(this.state.evenArray)}</span>
        <span className="resultsBox">{ JSON.stringify(this.state.oddArray)} </span>
      </div>
    )
  }
}




export default EvenAndOdd