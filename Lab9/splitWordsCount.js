function splitWordsCount(input) {
    const splitInput = input.split(";");
    const separateStrings = splitInput.slice(1, splitInput.length - 1);
    const wordsCount = separateStrings.filter(s => s.trim() !== "").length;

    return wordsCount;
}

module.exports = splitWordsCount;