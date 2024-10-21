// ============= Jawaban : ==============
let n = [12, 9, 13, 6, 10, 4, 7, 2];
let filteredArray = [];
for (let i = 0; i < n.length; i++) {
  if (n[i] % 3 !== 0) {
    filteredArray.push(n[i]);
  }
}
n = filteredArray;
// console.log(n);
let sortedArray = [...filteredArray];
// console.log(sortedArray);

for (let i = 0; i < n.length; i++) {
  for (let j = 0; j < n.length; j++) {
    if (i == j) {
      continue;
    } else if (sortedArray[i] < sortedArray[j]) {
      let stash = sortedArray[i];
      sortedArray[i] = sortedArray[j];
      sortedArray[j] = stash;
    }
  }
}

n = sortedArray;
console.log(n);
