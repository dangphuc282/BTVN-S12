let nhap = prompt("Vui long nhap so tuoi de kiem tra:");
let so = parseInt(nhap);

if (isNaN(so)) {
    document.write("Vui long nhap lai");
    console.log("Vui long nhap lai");
} else if (so > 0 && so < 120) {
    document.write(`${so} la so tuoi hop le`);
    console.log(`${so} la so tuoi hop le`);
} else {
    document.write(`${so} khong phai la tuoi hop le cua mot nguoi`);
    console.log(`${so} khong phai la tuoi hop le cua mot nguoi`);
}