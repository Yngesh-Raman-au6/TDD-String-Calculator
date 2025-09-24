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
    const numbers = numbersString.split(delimiter).map((value) => parseInt(value));
    const negativeNumbers = numbers.filter((num) => num < 0);

    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed ${negativeNumbers.join(",")}`);
    }

    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}   

module.exports = { stringCalculator };