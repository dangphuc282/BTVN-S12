let a = parseFloat(prompt("nhap vao canh a (cm):"));

if (isNaN(a)) {
    console.log("Vui long nhap lai");
} else {
    let dienTich = a * a;
    console.log(`${a}cm = ${dienTich.toFixed(0)}cm`);
    document.write(`${a}cm = ${dienTich.toFixed(0)}cm`);
}
