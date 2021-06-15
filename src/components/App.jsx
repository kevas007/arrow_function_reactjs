import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

var numbers = [3, 56, 2, 48, 5];
// const newNumbers = numbers.map(x => x * 2
// );
// console.log(newNumbers);
// const newNumbers = numbers.filter(num => num < 10);
// console.log(newNumbers)
// var newNumber = numbers.reduce((accumulator, currentNumber )=> accumulator + currentNumber
// )
// const newNumber = numbers.find((num) => num > 10
// )
const newNumber = numbers.findIndex((num) => num > 10
)

console.log(newNumber);

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
