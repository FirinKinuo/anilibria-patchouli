<template>
    <section class="today">
        <div class="today-bg"></div>
        <h3 class="today-header">Ожидается сегодня:</h3>
        <figure class="today-element" v-for="(anime, index) in today_titles" :key="index">
            <img class="today-element__bg" :src="anime.img" :alt="anime.name">
            <figcaption class="today-element__new">Новое</figcaption>
        </figure>
    </section>
</template>

<script>
export default {
    name: "today-titles",
    props: ['today_titles']

}
</script>

<style scoped>
    .today-header{
        color: white;
        position: absolute;
        align-self: start;
    }

    .today{
        display: flex;
        align-items: end;
        position: relative;
        padding: 20px 10px;
        overflow: paged-x;
        background-color: var(--dark);
        height: 260px;
        z-index: 0;
    }

    .today-bg{
        background-image: url("../assets/pattern.jpg");
        width: 100%;
        height: 100%;
        position: absolute;
        margin: -20px -10px;
        opacity: 0.03;
        transform: revert;
    }

    .today-element{
        width: 150px;
        height: 214px;
        margin: 0 10px;
        position: relative;
        transition: 200ms;
        align-self: flex-end;

    }

    .today-element__bg{
        width: 100%;
        border-radius: 10px;
        z-index: 1;
        position: absolute;
    }

    .today-element__new{
        position: relative;
        width: inherit;
        height: inherit;
        background-color: rgba(21, 20, 20, 0.4);
        color: white;
        text-align: center;
        font-weight: bold;
        z-index: 10;
        padding: 5px 0;
    }

    .today-element:hover .today-element__bg{
        transform: scale(1.1);
    }

    .today-element:hover .today-element__new{
        opacity: 0;
    }

</style>