import axios from "axios";
import {default as config} from "/config.json"


export default {
    state: {
        anime: {
            'title': '',
            'season': '',
            'genres': '',
            'player': ''
        }
    },

    getters: {
        getAnimeData(state){
            return state.anime;
        }
    },

    actions: {
        async getAnimeDataFromApi({commit}, anime_id){
            let anime_data = {}
            const res = await axios.get(
                `${config.al_backend_api}getTitle?filter=id,names,genres,season,player&id=${anime_id}`
            );

            console.log(res)
            anime_data = {
                title: res.data['names']['ru'],
                season: `${res.data['season']['string']} ${res.data['season']['year']}`,
                genres: res.data['genres'][0],
            }
            commit('setAnimeData', anime_data);
        }
    },

    mutations: {
        setAnimeData(state, anime_data){
            state.anime = anime_data;
        },

    }
}
