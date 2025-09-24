const { stringCalculator } = require("./index");

describe("stringCalculator", () => {
  it("should return 0 if the string is empty", () => {
    expect(stringCalculator("")).toBe(0);
  });

  it("should return the same number for a single number", () => {
    expect(stringCalculator("1")).toBe(1);
  });
  
  
});