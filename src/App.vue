<template>
  <body id="app">
  <v-header/>
  <router-view/>
  </body>
</template>

<script>
import VHeader from "@/components/header";

export default {
  name: 'App',
  components: {VHeader},
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,400;0,500;0,700;1,200;1,400;1,700&display=swap');
@import "/src/assets/scss/variables";

:root {
  font-size: 20px;
}

* {
  outline: none;
  border: 0;
  text-decoration: none;
  color: var(--dark);
  font-family: 'Montserrat', sans-serif;
  scrollbar-width: thin;
  scrollbar-color: $primary $dark;
}

*::-webkit-scrollbar {
  width: 5px;
}

*::-webkit-scrollbar-track {
  background: white;
}

*::-webkit-scrollbar-thumb {
  background-color: var(--primary);
}

#app {
  background-color: $dark;
  padding: 0;
  margin: 0;
}

</style>