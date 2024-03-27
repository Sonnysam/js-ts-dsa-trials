function ReverseWord(str: string): string {
  let reversedString = "";

  for (let i = 0; i < str.length; i++) {
    reversedString = str[i] + reversedString;
  }

  return reversedString;
}

console.log(ReverseWord("Hello"));
