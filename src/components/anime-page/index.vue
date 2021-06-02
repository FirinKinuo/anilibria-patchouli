<template>
  <section>
    <section class="anime-card">
      <picture class="anime-card__background">
        <img :src="AnimeDataState['poster']" alt="">
      </picture>
      <div class="anime-card__data">
        <div class="anime-card__information">
          <section class="information__section">
            <h1 class="text_medium text_bold">{{ AnimeDataState['names']['ru'] }}</h1>
            <span class="text_medium">{{ AnimeDataState['names']['en'] }}</span>
          </section>

          <section class="information__section">
            <p class="text_medium">{{ AnimeDataState['season'] }}</p>
            <p class="text_medium">{{ AnimeDataState['type'] }}</p>
            <p class="text_medium">{{ AnimeDataState['genres'] }}</p>
          </section>

          <section class="information__section">
            <p class="text_small text_bold">Озвучка: <span class="text_small">{{ AnimeDataState['team']['voice'] }}</span></p>
            <p class="text_small text_bold">Тайминг: <span class="text_small">{{ AnimeDataState['team']['timing'] }}</span></p>
            <p class="text_small text_bold">Работа над субтитрами: <span class="text_small">{{ AnimeDataState['team']['techs'] }}</span></p>
          </section>

          <section class="information__section">
            <span class="text_small">{{ AnimeDataState['description'] }}</span>
          </section>

        </div>
        <div class="anime-card__get-anime">
          <div class="get-anime__player">
            <button class="button_primary">Смотреть</button>
            <span class="get-anime__realised">Доступно {{ AnimeDataState['episodes']['current'] }} серий</span>
          </div>
          <section class="get-anime__torrents">
            <a :href="'https://www.anilibria.tv'+torrent['url']" class="torrent" v-for="(torrent, index) in AnimeDataState['torrents']" :key="index" >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M15.79 9.26C15.4259 6.39166 12.9692 4.16666 10.0034 4.16666C7.70671 4.16666 5.71171 5.50916 4.80088 7.625C3.01088 8.16 1.67004 9.85 1.67004 11.6667C1.67004 13.9642 3.53921 15.8333 5.83671 15.8333H6.67004V14.1667H5.83671C4.45838 14.1667 3.33671 13.045 3.33671 11.6667C3.33671 10.4967 4.33588 9.36916 5.56421 9.15333L6.04838 9.06833L6.20838 8.60333C6.79421 6.89416 8.24838 5.83333 10.0034 5.83333C12.3009 5.83333 14.17 7.7025 14.17 10V10.8333H15.0034C15.9225 10.8333 16.67 11.5808 16.67 12.5C16.67 13.4192 15.9225 14.1667 15.0034 14.1667H13.3367V15.8333H15.0034C16.8417 15.8333 18.3367 14.3383 18.3367 12.5C18.3357 11.7529 18.0843 11.0278 17.6226 10.4404C17.161 9.85306 16.5157 9.43744 15.79 9.26Z"
                  fill="white"/>
              <path d="M10.8367 11.6667V8.33334H9.17004V11.6667H6.67004L10.0034 15.8333L13.3367 11.6667H10.8367Z"
                    fill="white"/>
            </svg>
              <span class="torrent__data">{{ torrent['quality']['string'] }} Серия: {{ torrent['series']['string'] }}</span>
            </a>

          </section>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "v-anime-page",
  computed: mapGetters({
    AnimeDataState: 'getAnimeData'
  }),
  methods: {
    ...mapActions(['fetchAnimeCardData']),
    redirectToAnimeCard(anime_id) {
      this.$router.push(`anime/${anime_id}`)
    }
  },
  async mounted() {
    await this.fetchAnimeCardData(this.$route.params['id']);
  }
}

</script>

<style lang="scss" scoped>
@import "/src/assets/scss/variables";
@import "/src/assets/scss/vue-components/anime-card";
@import "/src/assets/scss/scss-components/font-settings";
@import "/src/assets/scss/scss-components/button";

.anime-card {
  $darker: darken($dark, 3);
  background-color: $darker;
  position: relative;
  min-height: 600px;
  display: flex;
  align-items: flex-start;
  color: white;

  &__background {
    height: 100%;
    width: 100%;
    overflow: hidden;
    opacity: 0.8;
    position: relative;

    & img {
      position: relative;
      height: 100%;
      width: 100%;
      z-index: -1;
    }

    &:before {
      position: absolute;
      content: '';
      background: linear-gradient(90deg, rgba($darker, 0.2), $darker);
      left: 0;
      width: inherit;
      height: inherit;
    }
  }

  &__data {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: inheritф;
    padding: 30px;
  }

  &__information {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    .information__section {
      position: relative;
      width: 75%;
      display: flex;
      flex-direction: column;
      margin: 10px 0;
    }
  }

  &__get-anime {
    display: flex;
    justify-content: space-between;

    .get-anime__realised {
      margin: 0 0 0 20px ;
    }

    .get-anime__torrents{
      display: flex;
      flex-direction: column;
    }
  }
}

</style>