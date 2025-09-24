const { stringCalculator } = require("./index");

describe("stringCalculator", () => {
  it("should return 0 if the string is empty", () => {
    expect(stringCalculator("")).toBe(0);
  });

  it("should return the same number for a single number", () => {
    expect(stringCalculator("1")).toBe(1);
  });

  it("should return the sum of two numbers separated by a comma", () => {
    expect(stringCalculator("1,2")).toBe(3);
  });

  it("should return the sum of two numbers separated by a newline", () => {
    expect(stringCalculator("1\n2")).toBe(3);
  });

  it("should return the sum of two numbers separated by a comma and a newline", () => {
    expect(stringCalculator("1,2\n3")).toBe(6);
  });

  it("should return the sum of two numbers separated by a custom delimiter", () => {
    expect(stringCalculator("//;\n1;2")).toBe(3);
  });

  it("should throw an error if the string contains a negative number", () => {
    expect(stringCalculator("1,-2")).toThrow("negatives not allowed");
  });
  
  
});