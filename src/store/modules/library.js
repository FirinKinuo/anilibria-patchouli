import axios from "axios";


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
    async getLibraryDataFromApi({commit}){
        let titles = []
        const res = await axios.get(
            `https://api.anilibria.tv/v2/getUpdates?filter=id,names,status,poster.url,updated,last_change,torrents.series.last&limit=${20}`
        );

        res.data.forEach(anime => {
            titles.push({
                name: anime['names']['ru'],
                img: "https://static.anilibria.tv/" + anime.poster.url,
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
