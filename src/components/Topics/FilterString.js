import React, { Component } from "react";

const stringArr = ['orange', 'grape', 'apple', 'pineapple', 'lemon', 'lime', 'bannana']






class FilterString extends Component {
  constructor() {
    super()

    this.state = {
      unFilteredArray: stringArr,
      userInput: '',
      filteredArray: []
    }
  }

    onChangeHandle = input => {
      this.setState ({ userInput: input })
    }

    onClickHandle = () => {
      const { unFilteredArray, userInput } = this.state
      //Solve here
      const resultArr = unFilteredArray.filter(element => {
        if (element.includes(userInput.toLowerCase())) {
          return element
        }
      });
      
      this.setState({ filteredArray: resultArr })
    }


  render() {
    const { unFilteredArray, filteredArray } = this.state
    return(
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">{ JSON.stringify(unFilteredArray) }</span>
        <input className="inputLine" onChange={ (e) => this.onChangeHandle(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.onClickHandle() }>Submit</button>
        <span className="resultsBox filterStringRB">{ JSON.stringify(filteredArray) }</span>
      </div>
    )
  }
}

export default FilterString