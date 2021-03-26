import GameOfLife from "@/helpers/gameOfLife.js";

// rules of the game

// validations
test("should get the same dimensions of the seed matrix in the updated matrix", () => {
  let gameOfLife = new GameOfLife([[1]]);
  let solution = gameOfLife.update();
  expect(solution.length).toBe(1);
  expect(solution[0].length).toBe(1);

  gameOfLife = new GameOfLife([
    [1, 0, 1],
    [0, 1, 0],
  ]);
  solution = gameOfLife.update();
  expect(solution.length).toBe(2);
  expect(solution[0].length).toBe(3);
  expect(solution[1].length).toBe(3);
});

test("should get an empty updated matrix if the seed is empty", () => {
  let gameOfLife = new GameOfLife([[]]);
  let solution = gameOfLife.update();
  expect(solution).toEqual([[]]);
});

test("should get an empty updated matrix if the seed is not a matrix", () => {
  let gameOfLife = new GameOfLife([
    [0, 0],
    [0, 0, 0],
  ]);
  let solution = gameOfLife.update();
  expect(solution).toEqual([[]]);
});

test(`should get only dead cells in the updated matrix 
if any cell of the seed has a value different to zero or one`, () => {
  let gameOfLife = new GameOfLife([["not-valid"]]);
  let solution = gameOfLife.update();
  expect(solution).toEqual([[0]]);

  gameOfLife = new GameOfLife([
    [1, 2],
    [2, "not-valid"],
  ]);
  solution = gameOfLife.update();
  expect(solution).toEqual([
    [0, 0],
    [0, 0],
  ]);
});

test(`should get a value of zero (dead) or one (alive) 
in each cell of the updated matrix if the seed is OK`, () => {
  let gameOfLife = new GameOfLife([[1]]);
  let solution = gameOfLife.update();
  expect([0, 1].includes(solution[0][0])).toBe(true);

  gameOfLife = new GameOfLife([
    [1, 0, 1],
    [0, 1, 0],
  ]);
  solution = gameOfLife.update();
  expect([0, 1].includes(solution[0][0])).toBe(true);
  expect([0, 1].includes(solution[0][1])).toBe(true);
  expect([0, 1].includes(solution[0][2])).toBe(true);
  expect([0, 1].includes(solution[1][0])).toBe(true);
  expect([0, 1].includes(solution[1][1])).toBe(true);
  expect([0, 1].includes(solution[1][2])).toBe(true);

  gameOfLife = new GameOfLife([
    [1, 1],
    [0, 0],
    [0, 0],
  ]);
  solution = gameOfLife.update();
  expect([0, 1].includes(solution[0][0])).toBe(true);
  expect([0, 1].includes(solution[0][1])).toBe(true);
  expect([0, 1].includes(solution[1][0])).toBe(true);
  expect([0, 1].includes(solution[1][1])).toBe(true);
  expect([0, 1].includes(solution[2][0])).toBe(true);
  expect([0, 1].includes(solution[2][1])).toBe(true);
});
