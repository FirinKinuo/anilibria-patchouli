<template>
    <main id="app" class="container-full">
      <MainMenu></MainMenu>
        <TodayTitles/>
      <Library/>
    </main>
</template>

<script>

import MainMenu from "@/components/mainMenu";
import Library from "@/components/library";
import TodayTitles from "@/components/today-titles"

export default {
    name: 'App',

    components: {
        TodayTitles,
        MainMenu,
        Library
    },
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,400;0,500;0,700;1,200;1,400;1,700&display=swap');
:root {
  font-size: 16pt;
  --primary: #e73321;
  --secondary: #ffd400;
  --success: #69cc57;
  --warning: #ea7222;
  --dark: #011627;
}

*{
    margin: 0;
    padding: 0;
    outline: none;
    border: 0;
    font-family: 'Montserrat', sans-serif;
    scrollbar-width: thin;
    scrollbar-color: var(--primary) white;
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

.container-full{
  width: 100%;
}

</style>