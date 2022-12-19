document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const button = document.querySelector("button");
const textArea = document.querySelector("textarea");
///// DAY ONE
// button.addEventListener('click', function () {
//   let text = textArea.value;
//   let fix = text.replaceAll('\n', ' ').split('  ');
//   let arr = [];
//   let highestNumber = 0;
//   let secondHighestNumber = 0;
//   let thirdHighestNumber = 0;
//   for (const [num, ar] of fix.entries()) {
//     let it = ar.split(' ').map(str => {
//       return Number(str);
//     });
//     let arraySum = it.reduce((sum, value) => {
//       return sum + value;
//     }, 0);
//     if (arraySum > highestNumber) highestNumber = arraySum;
//     if (arraySum > secondHighestNumber && highestNumber > arraySum)
//       secondHighestNumber = arraySum;
//     if (arraySum > thirdHighestNumber && secondHighestNumber > arraySum)
//       thirdHighestNumber = arraySum;
//     // arr.push(arraySum);
//   }
//   console.log('first: ', highestNumber);
//   console.log('second: ', secondHighestNumber);
//   console.log('third: ', thirdHighestNumber);
//   console.log(highestNumber + secondHighestNumber + thirdHighestNumber);
//   // console.log(arr.indexOf(highestNumber));
//   // console.log(arr);
// });

///// DAY TWO PART ONE
// A rock B Paper C scissors
// X rock Y Paper C scissors

// button.addEventListener('click', function () {
//   let totalScore = 0;
//   let text = textArea.value;
//   let fix = text.split('\n');
//   for (let i = 0; i < fix.length; i++) {
//     if (fix[i] == 'A X') {
//       totalScore += 4;
//     } else if (fix[i] == 'A Y') {
//       totalScore += 8;
//     } else if (fix[i] == 'A Z') {
//       totalScore += 3;
//     } else if (fix[i] == 'B X') {
//       totalScore += 1;
//     } else if (fix[i] == 'B Y') {
//       totalScore += 5;
//     } else if (fix[i] == 'B Z') {
//       totalScore += 9;
//     } else if (fix[i] == 'C X') {
//       totalScore += 7;
//     } else if (fix[i] == 'C Y') {
//       totalScore += 2;
//     } else if (fix[i] == 'C Z') {
//       totalScore += 6;
//     }
//   }
//   console.log(totalScore);
// });

///// DAY TWO PART TWO
// button.addEventListener("click", function () {
//   let totalScore = 0;
//   let text = textArea.value;
//   let fix = text.split("\n");
//   for (let i = 0; i < fix.length; i++) {
//     if (fix[i] == "A X") {
//       totalScore += 3;
//     } else if (fix[i] == "A Y") {
//       totalScore += 4;
//     } else if (fix[i] == "A Z") {
//       totalScore += 8;
//     } else if (fix[i] == "B X") {
//       totalScore += 1;
//     } else if (fix[i] == "B Y") {
//       totalScore += 5;
//     } else if (fix[i] == "B Z") {
//       totalScore += 9;
//     } else if (fix[i] == "C X") {
//       totalScore += 2;
//     } else if (fix[i] == "C Y") {
//       totalScore += 6;
//     } else if (fix[i] == "C Z") {
//       totalScore += 7;
//     }
//   }
//   console.log(totalScore);
// });

///// DAY THREE PART ONE
// button.addEventListener("click", function () {
//   let text = textArea.value;
//   let fix = text.split("\n");
//   let matchingLetters = [];
//   let prioritySum = 0;
//   //   console.log(fix);
//   for (let backpack of fix) {
//     let [bpc1, bpc2] = [
//       backpack.slice(0, backpack.length / 2),
//       backpack.slice(backpack.length / 2),
//     ];
//     for (let i = 0; i < bpc1.length; i++) {
//       if (bpc2.includes(bpc1[i])) {
//         matchingLetters.push(bpc1[i]);
//         if (arr1[i].toLowerCase() === arr1[i]) {
//   prioritySum += arr1[i].charCodeAt(0) - 96;
// } else {
//   prioritySum += arr1[i].charCodeAt(0) - 38;
// }
// console.log(prioritySum);
// break;
//       }
//     }
//     // console.log([bpc1, bpc2]);
//   }
//   console.log(prioritySum);
//   console.log(matchingLetters);
// });

///// DAY THREE PART TWO
// button.addEventListener("click", function () {
//   let text = textArea.value;
//   let fix = text.split("\n");
//   let trippleArray = [];
//   let matchingLetters = [];
//   let prioritySum = 0;
//   //   console.log(fix);
//   for (let i = 0; i < fix.length; i += 3) {
//     trippleArray.push([fix[i], fix[i + 1], fix[i + 2]]);
//   }
//   for ([arr1, arr2, arr3] of trippleArray) {
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr2.includes(arr1[i]) && arr3.includes(arr1[i])) {
//         matchingLetters.push(arr1[i]);
//         if (arr1[i].toLowerCase() === arr1[i]) {
//           prioritySum += arr1[i].charCodeAt(0) - 96;
//         } else {
//           prioritySum += arr1[i].charCodeAt(0) - 38;
//         }
//         console.log(prioritySum);
//         break;
//       }
//     }
//   }
//   console.log(matchingLetters);
// });

///// DAY FOUR PART ONE
button.addEventListener("click", function () {
  let textValue = textArea.value;
  let fix = textValue.split("\n");
  console.log("fix:", fix);
  console.log(fix.length);
  let arr = [];
  for (let i = 0; i < fix.length; i++) {
    let [str] = fix[i].slice(",");
    arr.push(str);
  }
  console.log("arr:", arr);
});
