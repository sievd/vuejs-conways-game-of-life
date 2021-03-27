<template>
  <table>
    <tr v-for="x in numOfRows" :key="x">
      <td
        v-for="y in numOfColumns"
        :key="y"
        :id="`cell-${x}-${y}`"
        @click="onCellClicked(x, y)"
        @dragenter="onCellFocus(x, y)"
        class="cell"
        :style="{
          height: cellSize,
          width: cellSize,
        }"
      ></td>
    </tr>
  </table>
</template>

<script>
import { getRGBColor } from "@/helpers/colorGenerator.js";
import { createEmptyMatrix } from "@/helpers/gameOfLife.js";

export default {
  name: "Matrix",
  props: {
    numOfRows: { type: Number, required: true },
    numOfColumns: { type: Number, required: true },
    cellSize: { type: Number, required: true },
  },
  data() {
    return {
      matrix: createEmptyMatrix(this.numOfRows, this.numOfColumns),
    };
  },
  methods: {
    onCellClicked(x, y) {
      console.log("clicked cell", x, y);
    },
    getColor() {
      return getRGBColor();
    },
    onCellFocus(x, y) {
      const cell = document.getElementById(`cell-${x}-${y}`);
      cell.style.backgroundColor = this.getColor();
      this.matrix[x - 1][y - 1] = 1;
      console.log(x, y);
    },
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
</style>
