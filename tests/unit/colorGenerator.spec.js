import { getRGBColor } from "@/lib/colorGenerator.js";

test("the first symbol of the color value should be '#'", () => {
  const color = getRGBColor();
  expect(color[0]).toBe("#");
});

test("the color value should have a length of 7", () => {
  const color = getRGBColor();
  expect(color.length).toBe(7);
});

test("each letter of the color value after the first one should be a valid hexadecimal symbol", () => {
  const color = getRGBColor();
  const letters = "0123456789ABCDEF";
  expect(letters.includes(color[1])).toBe(true);
  expect(letters.includes(color[2])).toBe(true);
  expect(letters.includes(color[3])).toBe(true);
  expect(letters.includes(color[4])).toBe(true);
  expect(letters.includes(color[5])).toBe(true);
  expect(letters.includes(color[6])).toBe(true);
});
