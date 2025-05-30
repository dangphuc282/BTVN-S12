let n = parseInt(prompt("Nhập một số nguyên dương:"));
let giaiThua = 1;

if (n < 0 || isNaN(n)) {
  console.log("Vui lòng nhập một số nguyên dương.");
} else {
  for (let i = 1; i <= n; i++) {
    giaiThua *= i;
  }

  console.log(n + "! = " + giaiThua);
}