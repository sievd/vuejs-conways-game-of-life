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
          'background-color': getRandomColor(),
        }"
      ></td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "Home",
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
    getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
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
