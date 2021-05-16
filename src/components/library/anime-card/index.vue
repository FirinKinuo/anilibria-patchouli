<template>
  <figure class="anime-card" @mouseenter="cardMouseEnter" @mouseleave="cardMouseLeave">
    <img class="anime-card__bg" :src="anime_data.img" :alt="anime_data.name">
  </figure>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "v-anime-card",
  props: {
    width: {
      default: 350,
      Number
    },
    show_update: {
      default: false,
      Boolean
    },
    'anime_data': Object
  },
  computed: mapGetters({
    AnimeDataState: 'getAnimeData'
  }),
  methods: {
    ...mapActions(['fetchAnimeData']),
    async cardMouseEnter(event) {
      const sliceDescription = (text, slice_to = 220) => {
        return text.length <= slice_to ? text : text.slice(0, slice_to - (slice_to - text.indexOf(' ', slice_to - 20))) + '...'
      }
      const card = event.target;
      const card_bg = card.querySelector('.anime-card__bg');
      let card_info = document.createElement('figcaption');

      card_info.classList.add('anime-card__info');
      card_bg.before(card_info)

      await this.fetchAnimeData(this.anime_data.id)
      const anime = this.AnimeDataState

      card_info.innerHTML = `
        <div class="info__about">
          <h2 class="info__title">${anime['name']}</h2>
          <span class="info__season">${anime['season']}</span>
          <span class="info__description">${sliceDescription(anime['description'])}</span>
          <span class="info__genres">${anime['genres']}</span>
        </div>
        <span class="info__episodes">${anime['episodes']['current']} из ${anime['episodes']['total']} серий</span>
      `
    },
    cardMouseLeave(event) {
      const card = event.target;
      const card_info = card.querySelector('.anime-card__info');
      card_info.remove()
    }
  },
}
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/variables";

.anime-card {
  @mixin card_size($width) {
    width: $width;
    height: $width*1.43;
  }

  @include card_size(350px);
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px;

  &:hover &__bg {
    width: 120%;
    transform: translate(-10%, -10%);
  }

  &__bg {
    width: 100%;
    transition: 200ms ease-in-out;
  }

  &::v-deep &__info {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    background-color: rgba($dark, 0.8);
    color: white;
    z-index: 1;
    margin: 0;
    padding: 10px;
    animation: appearance_block 200ms ease-in-out;

    @keyframes appearance_block {
      0%, 30% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    .info {
      &__about {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 90%;
        animation: appearance_text 200ms linear;

        @keyframes appearance_text {
          0%, 60% {
            left: -50px;
          }
          100% {
            left: 0;
          }
        }

        & * {
          margin: 5px 0;
        }
      }

      &__title {
        font-weight: bold;
        font-size: 1.2rem;
      }

      &__season {
        font-weight: bolder;
        font-size: 1.2rem;
      }

      &__description {
        font-weight: normal;
        font-size: 0.9rem;
      }

      &__genres {
        font-weight: bolder;
        font-size: 0.8rem;
      }

      &__episodes {
        position: relative;
        font-weight: bold;
        font-size: 1.4rem;
        margin-left: 1rem;

        &:before {
          display: block;
          position: absolute;
          left: -0.6rem;
          content: "";
          width: 7px;
          height: 100%;
          background-color: $primary;
        }
      }
    }
  }
}

</style>