function stringCalculator(string) {
    if (string === "") {
        return 0;
    }
    if (string.length === 1) {
        return parseInt(string);
    }
    if (string.includes(",")) {
        return string.split(",").reduce((acc, curr) => acc + parseInt(curr), 0);
    }
    return 0;
}   

module.exports = { stringCalculator };