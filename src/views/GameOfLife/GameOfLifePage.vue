<template>
  <div>
    <div v-show="showSeed">
      <h1>Click and move the mouse to set the initial state :-]</h1>
      <Matrix
        :matrix="seed"
        :cellSize="cellSize"
        @cell-focus="onCellFocus"
        :isSeed="true"
        class="matrix"
      ></Matrix>
      <button @click="onSimulateButtonClicked">
        simulate <img src="@/assets/icons/simulate.svg" />
      </button>
    </div>
    <div v-show="!showSeed">
      <Matrix
        :matrix="matrix"
        :cellSize="cellSize"
        :isSeed="false"
        class="matrix"
      ></Matrix>
    </div>
  </div>
</template>

<script>
import GameOfLife from "@/helpers/gameOfLife.js";
import { createEmptyMatrix } from "@/helpers/gameOfLife.js";
import Matrix from "./Matrix.vue";

export default {
  name: "GameOfLife",
  components: { Matrix },
  data() {
    return {
      cellSize: 10,
      numOfRows: 0,
      numOfColumns: 0,
      seed: [[]],
      showSeed: true,
      matrix: [[]],
      gameOfLife: null,
    };
  },
  methods: {
    onCellFocus(x, y) {
      this.seed[x][y] = 1;
    },
    onSimulateButtonClicked() {
      this.gameOfLife = new GameOfLife(this.seed);
      this.matrix = this.seed;
      this.showSeed = false;
      this.runSimulation();
    },
    runSimulation() {
      setInterval(() => {
        this.matrix = this.gameOfLife.update();
      }, 1000);
    },
  },
  created() {
    this.numOfColumns = Math.round(window.screen.availWidth / this.cellSize);
    this.numOfRows = Math.round(window.innerHeight / this.cellSize);
    this.seed = createEmptyMatrix(this.numOfRows, this.numOfColumns);
  },
};
</script>

<style scoped>
.matrix {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
</style>
