//14. Перевести данное значение угла β из радианной меры в градусную

const angleInRadians = 3;                               //угол в радианах
console.log(`Angle in radians: ${angleInRadians}`);

const angleInDegrees = angleInRadians * 180 / Math.PI;; //перевод угла из радиан в градусы

console.log(`Angle in degrees: ${angleInDegrees}`);     //вывод числа в градусах
