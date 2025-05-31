let n = 5;

document.write("<h3>Góc vuông trái dưới</h3>");
for (let i = 1; i <= n; i++) {
  document.write("*".repeat(i) + "<br>");
}

document.write("<h3>Góc vuông trái trên</h3>");
for (let i = n; i >= 1; i--) {
  document.write("*".repeat(i) + "<br>");
}

document.write("<h3>Góc vuông phải dưới</h3>");
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    document.write("&nbsp;&nbsp;");
  }
  for (let k = 1; k = i; k++) {
    document.write("*");
  }
  document.write("<br>");
}

document.write("<h3>Góc vuông phải trên</h3>");
for (let i = n; i >= 1; i--) {
  for (let j = 1; j <= n - i; j++) {
    document.write("&nbsp;&nbsp;");
  }
  for (let k = 1; k = i; k++) {
    document.write("*");
  }
  document.write("<br>");
}
