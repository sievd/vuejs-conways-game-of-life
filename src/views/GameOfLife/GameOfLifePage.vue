<template>
  <div>
    <div>
      <Matrix
        :numOfColumns="numOfColumns"
        :numOfRows="numOfRows"
        :cellSize="cellSize"
        class="matrix"
      ></Matrix>
    </div>
  </div>
</template>

<script>
import Matrix from "./Matrix.vue";

export default {
  name: "GameOfLife",
  components: { Matrix },
  data() {
    return {
      cellSize: 10,
      numOfRows: 0,
      numOfColumns: 0,
    };
  },
  methods: {},
  created() {
    this.numOfColumns = Math.round(window.screen.availWidth / this.cellSize);
    this.numOfRows = Math.round(window.innerHeight / this.cellSize);
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
