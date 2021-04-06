<template>
    <div class="modal-wrapper">
        <div class="anime" id="anime-card">
            <section class="anime_details">
                <h2 class="details_text anime_title">{{getAnimeData.title}}</h2>
                <span class="details_text anime_season">{{getAnimeData.season}}</span>
                <span class="details_text anime_genres">{{getAnimeData.genres}}</span>
            </section>
			<section class="anime_content">
				<Player class="anime_player"></Player>
				<Torrents></Torrents>
			</section>
        </div>
    </div>
</template>

<script>

import Player from "@/components/anime-card/player";
import Torrents from "@/components/anime-card/torrents";
import {mapActions, mapGetters} from "vuex";

export default {
    name: "anime-card",
	components: {Torrents, Player},
    computed: mapGetters([
        'getAnimeData',
    ]),
    methods: mapActions([
        'getAnimeDataFromApi',
    ]),
    async mounted (){
        await this.getAnimeDataFromApi(this.$route.params.id);
        const router = this.$router;

        document.addEventListener("click", e => {
            try {
                console.log(e.target.children)
                let modal_wrapper = e.target.parentElement.closest('.modal-wrapper')

                if (modal_wrapper === null){
                    router.push("/")
                }
            } catch (e) {
                undefined
            }
        });
    }
}
</script>

<style scoped>
.anime{
    max-width: 1200px;
    min-height: 600px;
    display: flex;
	flex-direction: column;
    position: relative;
    background-color: #fff;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: -10px 20px 0 var(--primary);
	padding: 50px 30px 20px 10px;
}

.anime_details{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 600px;
    padding: 0 20px;
}

.details_text{
	margin: 0 10px 5px 0 ;
}

.anime_genres{
    font-size: 0.9rem;
	margin-top: 0;
	margin-bottom: 30px;
}

.anime_season{
    font-size: 0.9rem;
}

.anime_player{
	width: 650px;
	height: 410px;
	overflow: hidden;
	border-radius: 10px;
	box-shadow: 10px 15px 0 var(--dark);
	z-index: 1001;
}

.anime_content{
	display: flex;
}

</style>