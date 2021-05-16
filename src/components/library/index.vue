<template>
  <section>
    <v-today-titles/>
    <section class="library">
      <v-anime-card
          v-for="(anime, index) in LibraryState" :key="index"
          :anime_data="anime"
      />
    </section>
  </section>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import VTodayTitles from "@/components/library/today-titles";
import VAnimeCard from "@/components/library/anime-card";

export default {
  name: "v-anime-library",
  components: {VAnimeCard, VTodayTitles},
  computed: mapGetters({
    LibraryState: 'getLibrary'
  }),
  methods: {
    ...mapActions(['fetchLibraryData']),
    redirectToAnimeCard(anime_id) {
      this.$router.push(`anime/${anime_id}`)
    }
  },
  async mounted() {
    await this.fetchLibraryData();
  }
}

</script>

<style lang="scss" scoped>
@import "/src/assets/scss/variables";
@import "/src/assets/scss/vue-components/anime-card";

.library {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}


</style>