let a = 0;
let b = 1;

while (true) {
  let next = a + b;
  a = b;
  b = next;

  if (b % 5 === 0) {
    console.log("Số đầu tiên trong dãy Fibonacci chia hết cho 5 là: " + b);
    break;
  }
}
