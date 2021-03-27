<template>
  <div>
    <div v-if="showSeed">
      <h1>
        <strong>Click and move</strong> the mouse to set the initial state :-]
      </h1>
      <Matrix
        :matrix="seed"
        :cellSize="cellSize"
        @cell-focus="onCellFocus"
        :isSeed="true"
        class="matrix seed"
      ></Matrix>
      <div class="options">
        <div @click="onSimulateButtonClicked" class="button">
          simulate <img src="@/assets/icons/simulate.svg" class="simulate" />
        </div>
      </div>
    </div>
    <div v-else>
      <Matrix
        :matrix="matrix"
        :cellSize="cellSize"
        :isSeed="false"
        class="matrix"
      ></Matrix>
      <div class="options">
        <div>
          <div @click="onPauseButtonClicked" class="button" v-if="!pause">
            pause <img src="@/assets/icons/pause.svg" class="pause" />
          </div>
          <div @click="onPlayButtonClicked" class="button play" v-else>
            play <img src="@/assets/icons/play.svg" class="play" />
          </div>
        </div>
        <div @click="onRestartButtonClicked" class="button">
          restart <img src="@/assets/icons/restart.svg" class="restart" />
        </div>
      </div>
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
      cellSize: 15,
      numOfRows: 0,
      numOfColumns: 0,
      seed: [[]],
      showSeed: true,
      matrix: [[]],
      gameOfLife: null,
      interval: null,
      pause: false,
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
      this.interval = setInterval(() => {
        this.matrix = this.gameOfLife.update();
      }, 1);
    },
    onPauseButtonClicked() {
      clearInterval(this.interval);
      this.pause = true;
    },
    onPlayButtonClicked() {
      this.runSimulation();
      this.pause = false;
    },
    onRestartButtonClicked() {
      clearInterval(this.interval);
      this.pause = false;
      this.seed = createEmptyMatrix(this.numOfRows, this.numOfColumns);
      this.showSeed = true;
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

.seed:hover {
  cursor: pointer;
}

h1,
.options {
  position: fixed;
}

h1 {
  font-size: 1.5rem;
  top: 1.5rem;
  text-align: center;
  width: 100%;
  margin: 0;
  padding: 0;
}

.options {
  bottom: 1.5rem;
  left: 2rem;
  display: flex;
}

.options > *:nth-child(2n + 1) {
  margin-right: 1rem;
}

.button {
  width: 8rem;
  font-size: 0.9rem;
  background: radial-gradient(
      338.02% 1367.9% at 222.31% 50%,
      #000000 0%,
      #272727 48.38%,
      #000000 95.02%
    ),
    #272727;
  color: white;
  text-align: center;
  padding: 0.5rem 0;
  box-shadow: 5px 4px 17px -6px rgba(0, 0, 0, 0.72);
}

.button:hover {
  cursor: pointer;
  opacity: 0.8;
}

img {
  background-color: inherit;
}

img.simulate {
  width: 0.6rem;
}

img.pause {
  width: 0.4rem;
}

img.play {
  width: 0.4rem;
}

img.restart {
  width: 0.8rem;
}
</style>
