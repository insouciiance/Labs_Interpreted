//34. ������ ��������� ��� ��䳿� �������������� ����� �����: �� ������� ����� ������
//�������� ����� ������ ������ ������� ������, ���� �������� ���� ������� - ������,
//�������� ���� ������ - ��������, �������� ����� ������ - ����� �������. ���� �����
//����� t, �� ������ ��� � ��������, �� ����� � ������� ������� ������. ���������,
//������ ����� ������� ������ ��� ��䳿� � ��� ������.

const prompt = require('prompt-sync')();

const t = parseInt(prompt("Enter time in minutes: "));  // �������� ���� �� ������� � �������� � ���� number

const remainder = t % 9;                                // ��������� remainder � ����������� ������� �� ������� �� 9

let color;                                              // ��������� color

if (remainder >= 0 && remainder < 3) {                  // ���������� ���� � ����������� �� �������� ���������� remainder
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

