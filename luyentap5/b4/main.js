let chieuCao = 5;
let chieuRong = 10;

document.write("<h3>Hình chữ nhật rỗng</h3>");

for (let i = 1; i <= chieuCao; i++) {
  for (let j = 1; j <= chieuRong; j++) {
    
    if (i === 1 || i === chieuCao || j === 1 || j === chieuRong) {
      document.write("*");
    } else {
      document.write("&nbsp;&nbsp;");  // In khoảng trắng
    }
  }
  document.write("<br>");
}
