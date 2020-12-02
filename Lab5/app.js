const prompt = require("prompt-sync")();

const n = parseInt(prompt("Enter n: ")); // получение числа n из консоли

if (isNaN(n) || n <= 0) { // валидация числа n
    return;
}

for (let c = 1; c <= n; c++) {
    for (let b = 1; b <= c; b++) {
        for (let a = 1; a <= b; a++) {
            if (c * c === a * a + b * b) { // проверка, является ли текущая тройка чисел a, b, c пифагоровой
                console.log(`a=${a} b=${b} c=${c}`);
            }
        }
    }
}