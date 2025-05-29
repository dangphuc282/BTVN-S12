let a = parseFloat(prompt("Nhập cạnh a (m):"));
let b = parseFloat(prompt("Nhập cạnh b (m):"));
let c = parseFloat(prompt("Nhập cạnh c (m):"));

if (isNaN(a) || isNaN(b) || isNaN(c)) {
  document.write("Vui long nhap lai");
  } else if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a) {
    alert("Ba cạnh a, b, c tạo thành một tam giác.");
  } else {
    alert("Ba cạnh a, b, c KHÔNG tạo thành một tam giác.");
  }
