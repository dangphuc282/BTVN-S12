// nhap du lieu
let a = parseFloat(prompt("Nhập số a:"));
let b = parseFloat(prompt("Nhập số b:"));

// phep tinh
let operation = a % b;

// ket qua
let result;

// thuc hien phep tinh
if(operation ===0){
  result = `a chia het cho b`;
}else if(b === 0){
  result = `khong the chia cho 0`
}
else {
  result = `a khong chia het cho b`;
}
// ket qua
alert("Kết quả: " + result);
