import React, { Component } from "react";

const fruit = [
  {
    name: "apple",
    color: "red",
    taste: "sweet"
  },
  {
    name: "pear",
    color: "green",
    taste: "less sweet"
  },
  {
    name: "lime",
    color: "green",
    sour: true
  },
  {
    name: "pineapple",
    color: "red",
    sour: true
  },
]




class FilterObject extends Component {
  constructor() {
    super()
    this.state = {
      unFilteredArray: fruit,
      userInput: '',
      filteredArray: []
    }
  }

  onChangeHandle = input => {
    this.setState( {userInput: input}) //invoking a function and passing in an obj with key and value
  }
    
  onClickFilter = () => {
    const prop = this.state.userInput
    const answer = this.state.unFilteredArray.filter((element) => { 
      if (element.hasOwnProperty(prop)) { // element.test not working because it's trying to see the value of the property.. just use hasOwnProperty()
        return element
      }
    })
    this.setState({filteredArray: answer})
  }



  render() {
    const { filteredArray, unFilteredArray } = this.state //How to destructure for easier use
    return(
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText"> { JSON.stringify(unFilteredArray) }</span>
        <input className="inputLine" onChange={(e) => this.onChangeHandle(e.target.value)}></input>
        <button className="confirmationButton" onClick={() => this.onClickFilter()}>Submit</button>
        <span className="resultsBox filterObjectRB">{ JSON.stringify(filteredArray) }</span>
      </div>
    )
  }
}

export default FilterObject