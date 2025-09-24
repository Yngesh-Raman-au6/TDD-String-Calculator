function stringCalculator(string) {
    if (string === "") {
        return 0;
    }
    if (string.length === 1) {
        return parseInt(string);
    }
    return 0;
}   

module.exports = { stringCalculator };