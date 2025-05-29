let age = parseInt(prompt("Nhap tuoi hoc sinh:"));

if (isNaN(age)) {
    alert("Vui long nhap lai");
} else if (age < 15) {
    alert("Hoc sinh du dieu kien vao lop 10");
} else {
    alert("Hoc sinh chua du dieu kien vao lop 10");
}