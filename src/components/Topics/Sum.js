import React, { Component } from "react";


class Sum extends Component {
  constructor() {
    super()

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }

  onChangeHandleNum1 = input => {
    this.setState({ number1: +input })
  }
  
  onChangeHandleNum2 = input => {
    this.setState({ number2: +input })
  }

  onClickHandle = () => {
    const { number1, number2 } = this.state
    const total = number1 + number2
    this.setState({ sum: total })
  }

  render() {
    const { sum } = this.state
    const { onChangeHandleNum1, onChangeHandleNum2, onClickHandle } = this
    return(
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input className="inputLine" onChange={(e) => onChangeHandleNum1(e.target.value)}></input>
        <input className="inputLine" onChange={(e) => onChangeHandleNum2(e.target.value)}></input>
        <button className="confirmationButton" onClick={() => onClickHandle()}>Submit</button>
        <span className="resultsBox">{ JSON.stringify(sum) } </span>
      </div>
    )
  }
}

export default Sum