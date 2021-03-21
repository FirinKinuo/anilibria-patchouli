<template>
    <section class="adaptive-container" id="library">
        <LibraryMenu/>
        <section class="library">
          <figure class="library-element" v-for="(anime, index) in getLibrary" :key="index">
            <img class="library-element__bg" :src="anime.img" :alt="anime.name">
            <figcaption class="library-element__episode">{{ anime.episode }}</figcaption>
        </figure>
        </section>

    </section>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import LibraryMenu from "@/components/library-menu";

export default {
    name: "library",
  components: {LibraryMenu},
  modules: {
      LibraryMenu
    },
    computed: mapGetters([
      'getLibrary',
  ]),
  methods: mapActions([
      'getLibraryDataFromApi',
  ]),
  async mounted (){
    await this.getLibraryDataFromApi();
  }
}

</script>

<style scoped>
    .library{
        max-width: 90%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
    }

    .library-element{
        width: 275px;
        height: 393px;
        overflow: hidden;
        position: relative;
        margin: 5px;
    }

    .library-element:hover .library-element__bg{
        transform: scale(1.05);
        opacity: 90%;
    }

    .library-element__episode{
        padding: 10px;
        background: white;
        font-weight: bold;
        color: var(--dark);
        border-radius: 0 0 22px 0;
        width: 40px;
    }

    .library-element__bg{
        width: 100%;
        position: absolute;
        z-index: -10;
        transition: 200ms ease-in-out;
    }
</style>