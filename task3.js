// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3


const getPopular = (arr) => {
  if (arr.length === 0) {
    return null;
  }

  const frequencyMap = {};

  arr.forEach(element => {
    if (frequencyMap[element]) {
      frequencyMap[element]++;
    } else {
      frequencyMap[element] = 1;
    }
  });

  let mostFrequentElement;
  let highestFrequency = 0;

  for (const element in frequencyMap) {
    if (frequencyMap[element] > highestFrequency) {
      mostFrequentElement = element;
      highestFrequency = frequencyMap[element];
    }
  }

  return mostFrequentElement;
}

console.log(getPopular([3, 5, 2, 5, 3, 3, 1, 4, 5]));
