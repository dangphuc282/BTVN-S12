let doC = parseFloat(prompt("nhap nhiet do (°C):"));

if (isNaN(doC)) {
    console.log("Vui long nhap lai");
} else {
    let doF = doC * 9 / 5 + 32;
    console.log(`${doC}°C = ${doF.toFixed(2)}°F`);
    document.write(`${doC}°C = ${doF.toFixed(2)}°F`);
}
