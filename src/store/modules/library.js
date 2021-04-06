import axios from "axios";
import {default as config} from "/config.json"


export default {
  state: {
    library: []
  },

  getters: {
    getLibrary(state){
      return state.library;
    }
  },

  actions: {
    async getLibraryDataFromApi({commit}, limit=18){
        let titles = []
        const res = await axios.get(
            `${config.al_backend_api}getUpdates?filter=id,names,status,poster.url,updated,last_change,torrents.series.last&limit=${limit}`
        );

        res.data.forEach(anime => {
            titles.push({
                id: anime['id'],
                name: anime['names']['ru'],
                img: config.al_staticfiles_server + anime.poster.url,
                episode: anime['torrents']['series']['last']
            })
        })

      commit('updateLibrary', titles);

    }
  },

  mutations: {
    updateLibrary(state, titles){
      state.library = titles;
    }
  }
}
