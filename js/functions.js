//1
function checkLengthString(word, number) {
  return word.length > number;
}

checkLengthString("airport", 5);
checkLengthString("cat", 4);

//2
function getPalindrome(string) {
  const reverse = reverseString(string);
  return string === reverse;
}
getPalindrome("кот");

function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello");

//3
function getNumber(str) {
  const newArray = str.split("");
  let newString = "";
  newArray.forEach((letter) => {
    newString += Number.isInteger(letter * 1) ? letter : "";
  });
  return newString.length > 0 ? newString : NaN;
}
getNumber("rtrtrtrt");

//4
function fillString(str, minLength, addSymbol) {
  let i = 0;
  let strSymbol = "";
  while (str.length + strSymbol.length <= minLength) {
    strSymbol += addSymbol[i];
    i = i + 1 < addSymbol.length ? i + 1 : 0;
  }
  return strSymbol + str;
}
fillString("qwerty", 4, "0");
