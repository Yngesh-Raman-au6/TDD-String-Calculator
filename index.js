function stringCalculator(string) {
    if (string === "") {
        return 0;
    }

    let numbersPart = string;
    let delimiterPattern = /,|\n/;

    if (string.startsWith("//")) {
        const [header, body] = string.split("\n");
        const delimiter = header.substring(2);
        delimiterPattern = delimiter;
        numbersPart = body || "";
    }

    const numbers = numbersPart
        .split(delimiterPattern)
        .filter((segment) => segment !== "")
        .map((segment) => Number(segment));

    const negativeNumbers = numbers.filter((value) => value < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed ${negativeNumbers.join(",")}`);
    }

    return numbers.reduce((sum, value) => sum + value, 0);
}   

module.exports = { stringCalculator };