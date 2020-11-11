const prompt = require('prompt-sync')();

const a = parseFloat(prompt("Enter your number: "));

let x;
let prevX;

if (a <= 1) {
    x = Math.min(2 * a, 0.95);
}
else if (a > 1 && a < 25) {
    x = a / 5;
}
else {
    x = a / 25;
}

do {
    console.log(x);
    prevX = x;
    x = prevX * 4 / 5 + a / (5 * Math.pow(prevX, 4));
} while (Math.abs(x - prevX) > 0.0001);


console.log(x);

console.log(`The fifth root of ${a} is ${x}`);