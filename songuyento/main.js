function soNguyento(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

let m = 0;
for (let i = 2; m < 20; i++) {
  if (soNguyento(i)) {
    console.log(i);
    m++;
  }
}
