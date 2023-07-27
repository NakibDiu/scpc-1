// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

// Example Input: "hello world" Example Output: "dlrow olleh"

const reverseStr = (str) => {
  const strArr = str.split("");
  const reverse = [];
  // console.log(strArr.length)
  for (let i = strArr.length; i >= 0; i--) {
    reverse.push(strArr[i]);
  }
  return reverse.join("");
};
console.log(reverseStr("hello world"));
