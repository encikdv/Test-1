// =============== Jawaban : ====================

let n = 20;
let arrayStash = [];

for (let i = 1; i <= n; i++) {
  if (i % 3 === 0 && i % 4 === 0) {
    arrayStash.push("OKYES");
  } else if (i % 3 === 0) {
    arrayStash.push("OK");
  } else if (i % 4 === 0) {
    arrayStash.push("YES");
  } else {
    arrayStash.push(i);
  }
}

console.log(arrayStash.join().replaceAll(",", " "));
