function splitWordsCount(input) {
    const splitArray = input.split(";");
    return splitArray.slice(1, splitArray.length - 1).filter(s => s.trim()).length;
}

module.exports = splitWordsCount;