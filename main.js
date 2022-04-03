//QuickSort Algo. implementation

//array to sort
let input = ["5", "2", "9", "0", "8", "3", "1", "7", "-5", "-1"];
let start = performance.now();
console.log("Running quick sort...");
console.log(quickSort(input));
let duration = performance.now() - start;
console.log("QuickSort completed in " + duration + " milliseconds");

console.log("Running sort...");
start = performance.now();
console.log(input.sort(sortNumber));
duration = performance.now() - start;
console.log("Sort completed in " + duration + " milliseconds");

function sortNumber(a, b) {
  return a - b;
}

function quickSort(array, isNegative = false) {
  //check for valid array
  if (!Array.isArray(array) || array.length < 1) {
    return [];
  }

  //define algorithm variables
  const left = [];
  const right = [];
  const negatives = [];
  const pivot = array[0];

  switch (isNegative) {
    case true:
      for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
          right.push(array[i]);
        } else {
          left.push(array[i]);
        }
      }
      break;

    default:
      for (let i = 1; i < array.length; i++) {
        if (array[i] < 0) {
          negatives.push(array[i]);
        } else if (array[i] < pivot) {
          left.push(array[i]);
        } else {
          right.push(array[i]);
        }
      }
      break;
  }
  if (negatives) {
    return [].concat(
      quickSort(negatives, true),
      quickSort(left),
      pivot,
      quickSort(right)
    );
  } else {
    return [].concat(quickSort(left), pivot, quickSort(right));
  }
}
