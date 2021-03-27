const createEmptyMatrix = (n, m) =>
  new Array(n).fill(0).map(() => new Array(m).fill(0));

const isMatrix = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].length !== matrix[0].length) {
      return false;
    }
  }
  return true;
};

const isBinary = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!(matrix[i][j] === 0 || matrix[i][j] === 1)) {
        return false;
      }
    }
  }
  return true;
};

const modulo = (a, n) => {
  return a >= 0 ? a % n : (a + n) % n;
};

const removeDuplicates = (matrix) => {
  let set = new Set(matrix.map(JSON.stringify));
  let unique = Array.from(set).map(JSON.parse);
  return unique;
};

const getNeibhborCoords = (current, n, m) => {
  let x = current[0],
    y = current[1];
  let coords = [
    [x - 1, y - 1],
    [x - 1, y],
    [x - 1, y + 1],
    [x, y - 1],
    [x, y + 1],
    [x + 1, y - 1],
    [x + 1, y],
    [x + 1, y + 1],
  ];
  coords = coords.map((coord) => [modulo(coord[0], n), modulo(coord[1], m)]);
  coords = coords.filter((coord) => !(coord[0] == x && coord[1] == y));
  let unique = removeDuplicates(coords);
  return unique;
};

class GameOfLife {
  constructor(seed) {
    if (isMatrix(seed)) {
      this.seed = !isBinary(seed)
        ? createEmptyMatrix(seed.length, seed[0].length)
        : (this.seed = seed);
    } else {
      this.seed = [[]];
    }

    this.n = this.seed.length;
    this.m = this.seed[0].length;
  }
  getNeighbors(x, y) {
    let coords = getNeibhborCoords([x, y], this.n, this.m);
    let neighbors = [];
    for (let coord of coords) {
      neighbors.push(this.seed[coord[0]][coord[1]]);
    }
    return neighbors;
  }
  update() {
    const matrix = createEmptyMatrix(this.n, this.m);
    let neighbors, numOfAliveNeighbors;
    for (let i = 0; i < this.n; i++) {
      for (let j = 0; j < this.m; j++) {
        neighbors = this.getNeighbors(i, j);
        numOfAliveNeighbors = neighbors.reduce((acc, curr) => acc + curr, 0);
        if (this.seed[i][j] == 1) {
          matrix[i][j] =
            numOfAliveNeighbors === 2 || numOfAliveNeighbors == 3 ? 1 : 0;
        } else {
          matrix[i][j] = numOfAliveNeighbors === 3 ? 1 : 0;
        }
      }
    }
    this.seed = matrix;
    return matrix;
  }
}

export default GameOfLife;
export { createEmptyMatrix };
