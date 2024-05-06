const Color = require("../../src/js/colorpicker-color.js");

describe("Color class", () => {
  let color;

  beforeEach(() => {
    color = new Color("aabbcc");
  });

  it("should return color in raw format (with #)", () => {
    expect(color.toHex(true)).toEqual("#aabbcc");
  });

  it("should return color in raw format (without #)", () => {
    expect(color.toHex(false)).toEqual("aabbcc");
  });

  it("should return color in formatted format (without #)", () => {
    expect(color.toString()).toEqual("aabbcc");
  });
});
