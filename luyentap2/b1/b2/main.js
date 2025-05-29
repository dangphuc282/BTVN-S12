let met = parseFloat(prompt("nhap so met:"));

if (isNaN(met)) {
    console.log("Vui long nhap lai");
} else {
    let feet = met * 3.28084;
    console.log(`${met}m = ${feet.toFixed(2)}feet`);
    document.write(`${met}m = ${feet.toFixed(2)}feet`);
}
