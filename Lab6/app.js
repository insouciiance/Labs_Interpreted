const prompt = require("prompt-sync")();

const array = prompt().split(" ").map(parseInt);

console.log(containsPalindromes(array));

function containsPalindromes(arr) {
    let contains = false;

    for (const i of arr) {
        if (isPalindrome(i)) {
            contains = true;
        }
    }

    return contains;

    function isPalindrome(n) {
        let isPalindrome = true;
        const digitsCount = Math.floor(Math.log(10, n)) + 1;

        for (let i = 0; i < digitsCount / 2; i++) {
            const firstDigitToCompare = Math.floor(n / Math.pow(10, digitsCount - i - 1)) % 10;
            const secondDigitToCompare = Math.floor(n / Math.pow(10, i)) % 10;

            if (firstDigitToCompare !== secondDigitToCompare) {
                isPalindrome = false;
            }
        }

        return isPalindrome;
    }
}