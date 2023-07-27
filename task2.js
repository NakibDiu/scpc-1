// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

// Example Input: [2, -5, 10, -3, 7] Example Output: 19

const getPostiveSum = (arr) => {
    let sum  = 0;
    arr.map((num) => {
        num > 0 ? sum += num : sum;
    })
    return sum;
}
console.log(getPostiveSum([2, -5, 10, -3, 7] )) 