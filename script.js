//                   Password      (1111)

var i = 1;
let count = 0;
while (i <= 4) {
  let password = +prompt("Введи пароль");
  if (password === 1111) {
    alert("Запрошуємо на сайт");
    i = 5;
  } else if (password !== 1111) {
    count++;
    alert(`Пароль не вірний. Використано спроб - ${count}/4`);
  }
  i++;
}
if (count >= 4) {
  alert("Будь ласка спробуйте пізніше!");
}

//                Task 1

// let n = +prompt("Введи число ...");
// let f = 1;
// let fact;
// let i = 1;
// while (i <= n) {
//   f = f * i;
//   fact = f;
//   i++;
// }

// alert(`Факторіал числа  ${n} дорівнює -  ${fact}`);

//                 Task 2

// let i = 1000;
// while(i<=9999){
//    document.write(`<h2>${i}</h2>`);
//    i+=3;
// }

//                Task 3

// let i = -1;
// let n=1;
// while (n <= 55) {
//   i += 2;
//   document.write(`<h2>${i}</h2>`);
//   n++;
// }

//                Task 4

// let i=90;
// while(i>=0){
//    document.write(`<h2>${i}</h2>`);
//    i-=5;
// }

//                 Task 5

// let b=1;
// let i=1;
// while(i<=20){
//    b*=2;
//    document.write(`<h2>${b}</h2>`);
//    i++;
// }

//               Task 6

// let a=2;
// while(a<10000){
//    document.write(`<h2>${a}</h2>`);
//    a=2*a-1;
// }

//              Task 7

// let a=-166;
// while(a<100){
// if(a>-99){
//    document.write(`<h2>${a}</h2>`);
// }
// a=2*a+200;

// }

//            Task 8

// let a = +prompt("Введи число ...");
// let b = +prompt("Введи степінь ...");
// let result = 1;
// let m;
// let i = 1;
// while ( i <= Math.abs(b) ) {
//   if (b > 0) {
//     result *= a;
//   } else if (b < 0) {
//     m = 1 / (result *= a);
//   } else if (b == 0) {
//     result == 1;
//   }
//   i++
// }
// if (b >= 0) {
//   document.write(`<h2>${result}</h2>`);
// } else {
//   document.write(`<h2>${m}</h2>`);
// }
