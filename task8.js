// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const getSecondSmallest = (arr) => {
    if (arr.length < 2) {
      throw new Error("Array should have at least two elements.");
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
      } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
        secondSmallest = arr[i];
      }
    }
  
    if (secondSmallest === Infinity) {
      throw new Error("All elements in the array are the same.");
    }
  
    return secondSmallest;
  }
  
  console.log(getSecondSmallest([8, 3, 6, 7, 3, 9, 1, 4])); 
  