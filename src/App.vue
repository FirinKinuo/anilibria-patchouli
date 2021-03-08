<template>
  <main id="app" class="container-full">
    <MainMenu></MainMenu>
  </main>
</template>

<script>

import MainMenu from "@/components/mainMenu";

export default {
  name: 'App',
  components: {
    MainMenu

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
:root {
  font-size: 16pt;
  --primary: #e71d36;
  --secondary: #e500a4;
  --success: #57cc99;
  --warning: #ff9f1c;
  --dark: #011627;
}

*{
  margin: 0;
  padding: 0;
  outline: none;
  border: 0;
  font-family: 'Nunito', sans-serif;
}

.container-full{
  width: 100%;
}
</style>