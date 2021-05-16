<template>
  <section class="today">
    <h3 class="today-header">Ожидается сегодня:</h3>
    <v-anime-card
        v-for="(anime, index) in TodayLibraryState" :key="index"
        :anime_data="anime"
    />
  </section>
</template>

<script>

import {mapGetters, mapActions} from "vuex"
import VAnimeCard from "@/components/library/anime-card";

export default {
  name: "v-today-titles",
  components: {VAnimeCard},
  computed: mapGetters({
    TodayLibraryState: 'getTodayLibrary'
  }),
  methods: mapActions([
    'fetchTodayLibraryData',
  ]),
  async mounted() {
    await this.fetchTodayLibraryData();
  },
}

</script>

<style scoped>
.today-header {
  color: white;
  position: absolute;
  align-self: start;
}

.today {
  display: flex;
  align-items: end;
  position: relative;
  padding: 20px 10px;
  overflow: paged-x;
  background-color: var(--dark);
  height: 260px;
  z-index: 0;
}


</style>