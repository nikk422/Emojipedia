import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
};

export default function App() {
  var [meaning, setlmeaning] = useState(" ");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }
    setlmeaning(meaning);
  }
  return (
    <div className="App">
      <h1>inside outt</h1>
      <input onClick={emojiInputHandler} />
      <h2> {meaning}</h2>
    </div>
  );
}
