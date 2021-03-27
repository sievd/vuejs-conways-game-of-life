<template>
  <div id="app">
    <div id="main">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body,
body * {
  padding: 0;
  margin: 0;
  background-color: white;
}

#app {
  height: 100vh;
}

#main {
  flex: 1;
}
</style>
