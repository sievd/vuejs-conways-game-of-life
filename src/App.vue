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
@font-face {
  font-family: "Roboto Monospace Light";
  src: url("./assets/fonts/Roboto_Mono/RobotoMono-Light.ttf");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Roboto Monospace Regular";
  src: url("./assets/fonts/Roboto_Mono/RobotoMono-Regular.ttf");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "Roboto Monospace Medium";
  src: url("./assets/fonts/Roboto_Mono/RobotoMono-Medium.ttf");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: "Roboto Monospace Semibold";
  src: url("./assets/fonts/Roboto_Mono/RobotoMono-SemiBold.ttf");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: "Roboto Monospace Bold";
  src: url("./assets/fonts/Roboto_Mono/RobotoMono-Bold.ttf");
  font-weight: 800;
  font-style: normal;
}

html {
  font-size: calc(100vw * 0.0165);
  font-weight: 500;
}

body,
body * {
  padding: 0;
  margin: 0;
  background-color: white;
  font-family: "Roboto Monospace Regular";
}

strong {
  font-family: "Roboto Monospace Bold";
}

#app {
  height: 100vh;
}

#main {
  flex: 1;
}
</style>
