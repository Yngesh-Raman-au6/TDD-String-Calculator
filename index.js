function stringCalculator(string) {
    if (string === "") {
        return 0;
    }
    if (string.length === 1) {
        return parseInt(string);
    }
    let delimiter = /,|\n/;
    let numbersString = string;

    if (string.startsWith("//")) {
        delimiter = string.split("\n")[0].substring(2);
        numbersString = string.split("\n")[1];
    }
    return numbersString.split(delimiter).reduce((acc, curr) => acc + parseInt(curr), 0);
}   

module.exports = { stringCalculator };