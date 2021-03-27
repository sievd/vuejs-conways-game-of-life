<template>
  <table :style="{ '--cell-size': cellSize }" :class="isSeed ? 'seed' : ''">
    <tr v-for="x in matrix.length" :key="x">
      <td
        v-for="y in matrix[0].length"
        :key="y"
        :id="`cell-${x}-${y}`"
        @mousedown="focus = true"
        @mouseover="onCellFocus(x, y)"
        @mouseup="focus = false"
        :style="{
          'background-color':
            matrix[x - 1][y - 1] == 1 ? getRandomColor() : 'inherit',
        }"
        class="cell"
      ></td>
    </tr>
  </table>
</template>

<script>
import { getRGBColor } from "@/helpers/colorGenerator.js";

export default {
  name: "Matrix",
  props: {
    matrix: { type: Array, required: true },
    cellSize: { type: Number, required: true },
    isSeed: { type: Boolean, required: true },
  },
  data() {
    return {
      focus: false,
    };
  },
  methods: {
    getRandomColor() {
      return getRGBColor();
    },
    onCellFocus(x, y) {
      if (this.isSeed && this.focus) {
        const cell = document.getElementById(`cell-${x}-${y}`);
        cell.style.backgroundColor = this.getRandomColor();
        this.$emit("cell-focus", x - 1, y - 1);
      }
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

td {
  height: var(--cell-size);
  width: var(--cell-size);
}

.seed .cell:hover {
  background-color: black !important;
  opacity: 0.8;
}
</style>
