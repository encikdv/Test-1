// ====================== Jawaban ======================
// input n = 5
let n = 5;

// ============= a. Jawaban Algoritma: ================
// for (let i = 1; i <= n; i++) {
//   console.log(`${i}`.repeat(i));
// }

// =============== b. Jawaban Algoritma:===============
// let string = "";
// for (let i = 1; i <= n; i++) {
//   string = `${i}` + string;
//   console.log(string);
// }

// ============ c. Jawaban Algoritma: ===============
// let array = [];
// let input = 0;
// let ascending = true;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     if (ascending) {
//       input++;
//       array.push(input);
//     } else {
//       input--;
//       array.push(input);
//     }

//     if (input == 5) {
//       ascending = false;
//     } else if (input == 1) {
//       ascending = true;
//     }
//   }
// }

// // console.log(array);
// let count = 0;
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     string = string + `${array[count]}`;
//     count++;
//   }
//   console.log(string);
//   string = "";
// }

// =============== d. Jawaban Algoritma : =================

let array = [];
let temporaryArrayTop = [];
let temporaryArrayBottom = [];
let count = 0;
let noFill = true;
for (let i = 1; i <= n * n; i++) {
  array.push(i);
}
// console.log(array);

for (let i = 1; i <= n * n; i++) {
  if (i == 1) {
    temporaryArrayTop.push(array[i - 1]);
    continue;
  }

  if (i % n == 0 && noFill == true) {
    noFill = false;
  } else if (i % n == 0 && noFill == false) {
    temporaryArrayTop.push(array[i - 1]);
    if (array[i] !== undefined) {
      temporaryArrayTop.push(array[i]);
    }
    noFill = true;
  }
}

console.log(temporaryArrayTop.join().replaceAll(",", " "));

let ascending = true;
for (let i = 1; i < n; i++) {
  for (let j = 1; j <= n; j++) {
    if (ascending == true) {
      temporaryArrayBottom.push(temporaryArrayTop[j - 1] + 1);
      ascending = false;
    } else {
      temporaryArrayBottom.push(temporaryArrayTop[j - 1] - 1);
      ascending = true;
    }
  }
  console.log(temporaryArrayBottom.join().replaceAll(",", " "));
  temporaryArrayTop = temporaryArrayBottom;
  temporaryArrayBottom = [];
  ascending = !ascending;
}
