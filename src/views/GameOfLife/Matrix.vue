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
          height: cellSize,
          width: cellSize,
          'background-color': getColor(),
        }"
      ></td>
    </tr>
  </table>
</template>

<script>
import { getRGBColor } from "@/lib/colorGenerator.js";

export default {
  name: "Matrix",
  props: {
    numOfRows: { type: Number, required: true },
    numOfColumns: { type: Number, required: true },
    cellSize: { type: Number, required: true },
  },
  methods: {
    onCellClicked(x, y) {
      console.log("clicked cell", x, y);
    },
    getColor() {
      return getRGBColor();
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
