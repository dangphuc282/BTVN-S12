let count = 0;
let number = 0;
let sum = 0;

while (count < 30) {
  if (number % 7 === 0) {
    sum += number;
    count++;
  }
  number++;
}

console.log("Tổng của 30 số tự nhiên đầu tiên chia hết cho 7 là: " + sum);