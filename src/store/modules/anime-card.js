import axios from "axios";
import {default as config} from "/config.json"


export default {
  state: {
    anime: {
      'title': '',
      'season': '',
      'genres': '',
      'player': '',
      'torrents': ''
    }
  },

  getters: {
    getAnimeData(state) {
      return state.anime;
    }
  },

  actions: {
    async getAnimeDataFromApi({commit}, anime_id) {
      const res = await axios.get(
          `${config.al_backend_api}getTitle?filter=id,torrents.list,names,genres,season,player,&id=${anime_id}`
      );
      let anime_data = {
        title: res.data['names']['ru'],
        season: `${res.data['season']['string']} ${res.data['season']['year']}`,
        genres: res.data['genres'].join(', '),
        player: {
          host: res.data['player']['host'],
          playlist: res.data['player']['playlist']
        },
        torrents: res.data['torrents']['list'].map(torrent => {
          return {
            title: `Серия ${torrent['series']['string']} [${torrent['quality']['string']}]`,
            link: `https://www.anilibria.tv${torrent['url']}`,
            size: torrent['total_size'] < 1073741824 ?  // Сравнивает размер торрента с константой количества байтов в гигабайте и приводит к соотв. размеру
                `${(torrent['total_size'] / Math.pow(1024, 2)).toFixed(2)} MB` :
                `${(torrent['total_size'] / Math.pow(1024, 3)).toFixed(2)} GB`,
            seeders: torrent['seeders'],
            peers: torrent['leechers']
          }
        })
      }
      commit('setAnimeData', anime_data);
    }
  },

  mutations: {
    setAnimeData(state, anime_data) {
      state.anime = anime_data;
    },

  }
}
