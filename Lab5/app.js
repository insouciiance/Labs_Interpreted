const prompt = require("prompt-sync")();

const n = parseInt(prompt("Enter n: ")); // ��������� ����� n �� �������

if (isNaN(n) || n <= 0) { // ��������� ����� n
    return;
}

for (let c = 1; c <= n; c++) {
    for (let b = 1; b <= c; b++) {
        for (let a = 1; a <= b; a++) {
            if (c * c === a * a + b * b) { // ��������, �������� �� ������� ������ ����� a, b, c �����������
                console.log(`a=${a} b=${b} c=${c}`);
            }
        }
    }
}