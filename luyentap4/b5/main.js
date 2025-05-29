let a = 0;
let b = 1;
let sum = 0;

for (let i = 1; i <= 20; i++) {
  sum += a;

  let next = a + b;
  a = b;
  b = next;
}

console.log("Tổng của 20 số Fibonacci đầu tiên là: " + sum);
