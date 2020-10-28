//34. Робота світлофора для водіїв запрограмована таким чином: на початку кожної години
//протягом трьох хвилин горить зелений сигнал, потім протягом однієї хвилини - жовтий,
//протягом двох хвилин - червоний, протягом трьох хвилин - знову зелений. Дано дійсне
//число t, що означає час в хвилинах, що минув з початку чергової години. Визначити,
//сигнал якого кольору горить для водіїв в цей момент.

const prompt = require('prompt-sync')();

const t = parseInt(prompt("Enter time in minutes: "));  // получаем ввод из консоли и приводим к типу number

const remainder = t % 9;                                // объявляем remainder и присваиваем остаток от деления на 9

let color;                                              // объявляем color

if (remainder >= 0 && remainder < 3) {                  // определяем цвет в зависимости от значения переменной remainder
    color = 0;
}
else {
    if (remainder >= 3 && remainder < 4) {
        color = 1;
    }
    else {
        if (remainder >= 4 && remainder < 6) {
            color = 2;
        }
        else {
            color = 0;
        }
    }
}

console.log(`The color is ${color} (${color === 0 ? "Green" : color === 1 ? "Yellow" : "Red"})`);

