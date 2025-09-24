const { stringCalculator } = require("./index");

describe("stringCalculator", () => {
  it("should return 0 if the string is empty", () => {
    expect(stringCalculator("")).toBe(0);
  });
});