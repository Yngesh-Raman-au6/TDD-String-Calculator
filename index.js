function stringCalculator(string) {
    if (string === "") {
        return 0;
    }
    if (string.length === 1) {
        return parseInt(string);
    }
    const delimiter = /,|\n/;
    return string.split(delimiter).reduce((acc, curr) => acc + parseInt(curr), 0);
}   

module.exports = { stringCalculator };