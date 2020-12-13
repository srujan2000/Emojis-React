import React from "react";
import "./styles.css";
import { useState } from "react";

var fruits = {
  "🍇": "grapes",
  "🍊": "orange",
  "🍌": "banana",
  "🍍": "pineapple",
  "🍎": "apple",
  "🍓": "Strawberry",
  "🍉": "water melon",
  "🥝": "kiwi",
  "🍒": "cherry",
  "🍏": "green apple",
  "🍐": "pear",
  "🍑": "peach",
  "🥭": "mango",
  "🍋": "lemon",
  "🍈": "melon",
  "🍆": "egg plant",
  "🌽": "corn",
  "🍅": "tomato",
  "🥥": "coconut",
  "🥬": "leafy green",
  "🍄": "mushroom",
  "🥑": "avocado",
  "🥒": "cucumber",
  "🥦": "brocolli",
  "🥔": "potato",
  "🧄": "garlic",
  "🧅": "onion",
  "🥕": "carrot",
  "🌰": "chestnut",
  "🥜": "peanuts"
};

const emojis = Object.keys(fruits);

export default function App() {
  var [state, current] = useState(" ");

  function tellme(e) {
    var change = fruits[e.target.value];
    current(change);
  }

  function emojiClick(fruit) {
    var change = fruits[fruit];
    current(change);
  }

  return (
    <div className="App">
      <h2>Fruits and Vegetables</h2>
      <input
        className="emojinput"
        placeholder="Type Any Emoji"
        onChange={tellme}
      ></input>
      <h2>Emoji Name</h2>
      <h1 className="answer">{state}</h1>

      <div>
        {emojis.map(function (fruits) {
          return (
            <p
              className="emojis"
              key={fruits}
              onClick={() => emojiClick(fruits)}
            >
              {fruits}
            </p>
          );
        })}
      </div>
    </div>
  );
}
