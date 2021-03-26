<template>
  <table>
    <tr v-for="x in numOfRows" :key="x">
      <td
        v-for="y in numOfColumns"
        :key="y"
        :id="`cell-${x}-${y}`"
        @click="onCellClicked(x, y)"
        class="cell"
        :style="{
          '--cell-size': cellSize,
          'background-color': getColor(),
        }"
      ></td>
    </tr>
  </table>
</template>

<script>
import { getRGBColor } from "@/lib/colorGenerator.js";

export default {
  name: "GameOfLife",
  data() {
    return {
      cellSize: 10,
      numOfRows: 0,
      numOfColumns: 0,
    };
  },
  methods: {
    onCellClicked(x, y) {
      console.log("clicked cell", x, y);
    },
    getColor() {
      return getRGBColor();
    },
  },
  created() {
    this.numOfColumns = Math.round(window.screen.availWidth / this.cellSize);
    this.numOfRows = Math.round(window.innerHeight / this.cellSize);
  },
};
</script>

<style scoped>
table,
th,
td {
  border-collapse: collapse;
  margin: 0;
  padding: 0;
}

th {
  width: 100%;
}

td {
  height: var(--cell-size);
  width: var(--cell-size);
}

table {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
</style>
