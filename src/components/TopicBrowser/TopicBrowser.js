import React from "react";
import EvenAndOdd from "../Topics/EvenAndOdd";
import FilterObject from "../Topics/FilterObject";
import FilterString from "../Topics/FilterString";
import Palindrome from "../Topics/Palindrome";
import Sum from "../Topics/Sum";


const TopicBrowser = () => {
  // console.log() here for function component
  return (
    <div>
      <EvenAndOdd />
      <FilterObject />
      <FilterString />
      <Palindrome />
      <Sum />
    </div>
  )
}




export default TopicBrowser