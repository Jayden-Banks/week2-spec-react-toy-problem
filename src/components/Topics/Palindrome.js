import React, { Component } from "react";


class Palindrome extends Component {
  constructor() {
    super()

    this.state = {
      userInput: '',
      palindrome: ''
    }
  }

    onChangeHandle = input => {
      this.setState({ userInput: input})
    }

    onClickHandle = () => {
      // This is a very awkward way to get it to work, but I had fun using map so i'm keeping it!
      const { userInput } = this.state
      let inputCopy = userInput.slice()
      const backArr = []
      inputCopy = inputCopy.split('')
      console.log(inputCopy)
      inputCopy.map(element => {
        backArr.unshift(element)
      })
      
      inputCopy.join('') === backArr.join('') ? this.setState({ palindrome: true}) : this.setState({ palindrome: false})
      // if (inputCopy.join('') === backArr.join('')) {
      // } else {
      //   this.setState({ palindrome: false })
      // }
    }

  render() {
    const { onChangeHandle, onClickHandle } = this
    const { palindrome } = this.state
    return(
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={(e) => onChangeHandle(e.target.value)}></input>
        <button className="confirmationButton" onClick={() => onClickHandle()}>Submit</button>
        <span className="resultsBox">{ JSON.stringify(palindrome) }</span>
      </div>
    )
  }
}

export default Palindrome