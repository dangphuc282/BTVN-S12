// phuong trinh bac 1
    let a = parseFloat(prompt("nhap he so a:"));
    let b = parseFloat(prompt("nhap he so b:"));

    if (isNaN(a) || isNaN(b)) {
        document.write("Vui long nhap lai");
    } else if (a === 0) {
        if (b === 0) {
            document.write("Phuong trinh vo so nghiem");
        } else {
            document.write("Phuong trinh vo nghiem");
        }
    } else {
        let x = -b / a;
        document.write(`phuong trinh bac 1 co nghiem la x = ${x}`);
    }

