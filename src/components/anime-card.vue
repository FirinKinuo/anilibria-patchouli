<template>
    <div class="modal-wrapper">
        <div class="anime" id="anime-card">
            <div class="anime_bg">
                <img src="https://static.anilibria.tv/upload/release/350x500/8943.jpg" :alt="anime.name" class="anime_bg--image">
            </div>
            <section class="anime_details">
                <h2 class="anime_title">Нулевой Эдем</h2>
                <span class="anime_description">
                    Паренёк по имени Шики всю жизнь прожил в окружении роботов в заброшенном парке развлечений "Королевство Гранбелл". Вот уже сотню лет этот парк не видел посетителей. И вот, у ворот парка появляется милая девушка Ребекка со своим верным спутником котом Хеппи. Появление гостей в парке уже само по себе удивительное событие, но на этом сюрпризы только начинаются. Внезапно все роботы в парке начинают двигаться и нацеливаются на уничтожение людей. Шики ничего не остаётся, кроме как присоединиться к новым друзьям на их космическом корабле и сбежать в бескрайний космос.
                </span>
                <span class="anime_season">2021 весна</span>
                <span class="anime_genres">Фэнтези, комедия, приключения, сёнен, фантастика</span>
            </section>
            <div class="anime_player"></div>
            <section class="anime_torrents">

            </section>
        </div>
    </div>

</template>

<script>

export default {
    name: "anime-card",
    props: [
        'anime'
    ],
    async mounted() {
    }
}
</script>

<style scoped>
.anime{
    width: 1200px;
    min-height: 600px;
    display: flex;
    position: relative;
    flex-direction: column;
    background-color: #fff;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: -10px 20px 0 var(--primary);
}

.anime_bg{
    height: 100%;
    position: absolute;
    right: 70px;
    line-height: 0;
}

.anime_bg--image{
    height: inherit;
}

.anime_bg:after{
    content: "";
    width: 100%;
    height: 100%;
    right: 0;
    top: 0;
    position: absolute;
    background: linear-gradient(270deg, transparent, #ffffff);
}

.anime_details{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    z-index: 1001;
    width: 600px;
    padding: 40px;
}
.anime_description{
    font-size: 0.8rem;
    display: none;
}

.anime_genres{
    font-size: 0.9rem;
}

.anime_season{
    font-size: 0.9rem;
}

</style>