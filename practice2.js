// const input = document.getElementById("input");

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// function check() {
//   const value = input.value;
//   const reverse = reverseString(value);
//   if (value === reverse) {
//     alert("This is a Palindrome 👌");
//   } else {
//     alert("Not a Palindrome 😕");
//   }

//   input.value = "";
// }

// Reveal Button

// const revealBtn = document.querySelector(".revealbtn");
// const hiddentxt = document.querySelector(".hiddenContent");

// function revealContent() {
//   if (hiddentxt.classList.contains("revealbtn")) {
//     hiddentxt.classList.remove("revealbtn");
//   } else {
//     hiddentxt.classList.add("revealbtn");
//   }
// }
// revealBtn.addEventListener("click", revealContent);

const input = document.getElementById("input");
// users will inputs their text here and the result will go to the paragraph tag.
const result = document.getElementById("result-display");

function myreverseString(str) {
  return str.split("").reverse().join("");
}

function check() {
  let value = input.value;
  const reverse = myreverseString.value;
  if (value === reverse) {
    result.innerText = `"${value}" is a Palindrome 👌👌`;
    result.style.color = "green";
  } else {
    result.innerText = `"${value}" is NOT a Palindrome 😕😡`;
    result.style.color = "red";
  }

  input.value = "";
}

// let wordCheck = prompt("Enter word to Check if it is a palindrome:");
// function isPalindrome(wordCheck) {
//   let reversedWord = wordCheck.split("").reverse().join("");

//   if (reversedWord == wordCheck) {
//     console.log(`${wordCheck} is a palindrome`);
//   } else {
//     console.log(`${wordCheck}is not a palindrome`);
//   }
// }

// isPalindrome(wordCheck);
