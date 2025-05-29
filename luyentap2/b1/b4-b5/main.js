let a = parseFloat(prompt("nhap canh a:"));
let b = parseFloat(prompt("nhap canh b:"));

if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
    console.log("Vui long nhap lai");
} else {
    let dienTichHcn = a * b;
    let dienTichtamgiacvuong = (a * b) / 2;
    console.log(`Dien tich tam giac vuong la: ${dienTichtamgiacvuong}`);
    document.write(`Dien tich tam giac vuong la: ${dienTichtamgiacvuong}<br>`);
    
    console.log(`Dien tich hinh chu nhat la: ${dienTichHcn}`);
    document.write(`Dien tich hinh chu nhat la: ${dienTichHcn}`);

}