let a = parseInt(prompt("Nhap so nguyen thu nhat:"));
let b = parseInt(prompt("Nhap so nguyen thu hai:"));
let c = parseInt(prompt("Nhap so nguyen thu ba:"));

if (isNaN(a) || isNaN(b) || isNaN(c)) {
  alert("Vui long nhap lai");
} else {
  let max = a;

  if (b > max) {
    max = b;
  }

  if (c > max) {
    max = c;
  }

  alert("So lon nhat la: " + max);
}
