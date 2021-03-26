const createEmptyMatrix = (n, m) =>
  new Array(n).fill(0).map(() => new Array(m).fill(0));

class GameOfLife {
  constructor(seed) {
    if (this.isSeedValid(seed)) {
      this.seed = seed;
      this.n = seed.length;
      this.m = seed[0].length;
    } else {
      this.seed = [[]];
      this.n = 1;
      this.m = 0;
    }
  }
  isSeedValid(seed) {
    for (let i = 0; i < seed.length; i++) {
      if (seed[i].length != seed[0].length) {
        return false;
      }
    }
    return true;
  }
  update() {
    const emptyMatrix = createEmptyMatrix(this.n, this.m);
    return emptyMatrix;
  }
}

export default GameOfLife;
