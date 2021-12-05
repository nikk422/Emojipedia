import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "🤪": "Zany Face",
  "😴": "Sleeping Face",
  "🐕": "Dog",
  " 🇨🇦": "Canada",
  "🇮🇳": "India"
};

var emojiWeknow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setmeaning] = useState(" ");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }
    setmeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emojipedia📚</h1>
      <input
        onChange={emojiInputHandler}
        placeholder={"search your emoji🔍"}
        style={{
          padding: "0.7rem 10rem 0.7rem 0.5rem",
          fontSize: "1.5rem",
          borderRadius: "0.5rem",
          borderColor: "skyblue",
          backgroundColor: "wheat"
        }}
      />
      <h2> {meaning}</h2>
      <h3> emoji We know</h3>
      {emojiWeknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.7rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
