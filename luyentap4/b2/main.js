let nhietDo = parseFloat(prompt("Nhập nhiệt độ"));

if (nhietDo > 100) {
  document.write("Vui lòng giảm nhiệt độ");
} else if (nhietDo < 20) {
  document.write("Vui lòng tăng nhiệt độ");
} else {
  document.write("Nhiệt độ ổn định");
}
