let a = 0;
let b = 1;

for (let i = 1; i <= 20; i++) {
  document.write(a + "<br>");

  let next = a + b;
  a = b;
  b = next;
}