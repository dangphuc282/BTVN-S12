let soTienGoc = parseFloat(prompt("Nhập số tiền ban đầu (vnd):"));
let soThang = parseInt(prompt("Nhập số tháng cho vay:"));
let laiSuatThang = parseFloat(prompt("Nhập lãi suất hàng tháng (%):"))/100;

let tienLai = soTienGoc * soThang * laiSuatThang;
let tongTien = soTienGoc + tienLai;

document.write("<h3>Kết quả tính lãi ngân hàng (lãi đơn)</h3>");
document.write("Số tiền ban đầu: " + soTienGoc + " vnd<br>");
document.write("Số tháng: " + soThang + "<br>");
document.write("Lãi suất hàng tháng: " + laiSuatThang.toFixed(2) + "%<br>");
document.write("<strong>Tổng số tiền sau " + soThang + " tháng: " + tongTien + " vnd");
