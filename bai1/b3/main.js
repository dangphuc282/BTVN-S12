let number = parseInt(prompt("Nhap so nguyen bat ky:"));

if (isNaN(number)) {
  alert("Vui long nhap lai");
} else if (number > 0) {
  alert("So ban nhap lon hon 0");
} else if (number < 0) {
  alert("So ban nhap be hon 0");
} else {
  alert("So ban nhap la 0");
}