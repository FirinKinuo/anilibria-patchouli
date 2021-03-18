<template>
    <main id="app" class="container-full">
      <MainMenu></MainMenu>
        <TodayTitles :today_titles="today_titles"></TodayTitles>
      <Library :anime_list="anime_list"></Library>
    </main>
</template>

<script>

import MainMenu from "@/components/mainMenu";
import Library from "@/components/library";
import TodayTitles from "@/components/today-titles"

const axios = require('axios')

export default {
    name: 'App',
    data(){
        return{
            anime_list: [],
            today_titles: []
        }
    },
    components: {
        TodayTitles,
        MainMenu,
        Library
    },
    mounted() {
        let config = {
            method: 'get',
            url: `https://api.anilibria.tv/v2/getUpdates?filter=id,names,status,poster.url,updated,last_change,torrents.series.last&limit=${20}`,
        };

        axios(config)
            .then((response) => {
                response.data.forEach(anime => {
                    this.anime_list.push({
                        name: anime['names']['ru'],
                        href: null,
                        img: "https://static.anilibria.tv/"+anime.poster.url,
                        episode: anime['torrents']['series']['last']
                    })
                })
            });

        config['url'] = `https://api.anilibria.tv/v2/getSchedule?days=${new Date().getDay()-1}&filter=id,names,status,poster.url,updated,last_change,torrents.series.last`

        axios(config)
            .then((response) => {


                response.data[0]['list'].forEach(anime => {
                    this.today_titles.push({
                        name: anime['names']['ru'],
                        href: null,
                        img: "https://static.anilibria.tv/"+anime['poster']['url'],
                        episode: anime['torrents']['series']['last'],
                        updated: anime['updated']
                    })
                })
            })


    }
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