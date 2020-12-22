const prompt = require("prompt-sync")();
const splitWordsCount = require("./splitWordsCount");

const input = prompt();

const wordsCount = splitWordsCount(input);

console.log(`Number of words between ';': ${wordsCount}`);