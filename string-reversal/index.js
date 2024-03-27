// reverses("hello") === "olleh"
// reverses("hi") === "ih"

function reverseWord(str) {
  return str.split("").reverse().join("");
}

console.log(reverseWord("Hello"));
