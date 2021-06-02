import axios from "axios";

export default {
  state: {
    library: [],
    today_library: [],
    anime_data: {}
  },

  getters: {
    getLibrary(state) {
      return state.library;
    },
    getAnimeData(state) {
      return state.anime_data;
    },
    getTodayLibrary(state) {
      return state.today_library
    }
  },

  actions: {
    async fetchLibraryData({commit}, limit = 15) {
      let titles = []
      const res = await axios.get(
          `${process.env.VUE_APP_ANILIBRIA_API}getUpdates?filter=id,poster.url&limit=${limit}`
      );

      res.data.forEach(anime => {
        titles.push({
          id: anime['id'],
          img: process.env.VUE_APP_AL_STATICFILES_SERVER + anime.poster.url,
        })
      })

      commit('updateLibrary', titles);
    },

    async fetchAnimeData({commit}, anime_id) {
      const res = await axios.get(
          `${process.env.VUE_APP_ANILIBRIA_API}getTitle?filter=names.ru,description,genres,type,season,player.series.last&id=${anime_id}`
      );

      let anime_data = {
        name: res.data['names']['ru'],
        description: res.data['description'],
        genres: res.data['genres'].join(', '),
        season: `${res.data['season']['string']} ${res.data['season']['year']}`,
        episodes: {
          current: res.data['player']['series']['last'],
          total: res.data['type']['series']
        },
      }

      commit('insertAnimeData', anime_data);
    },

    async fetchAnimeCardData({commit}, anime_id) {
      const res = await axios.get(
          `${process.env.VUE_APP_ANILIBRIA_API}getTitle?filter=id,names,genres,season,description,poster.url,type,team,player.series.last,torrents&id=${anime_id}`
      );

      console.log(res)

      let anime_data = {
        names: res.data['names'],
        poster: process.env.VUE_APP_AL_STATICFILES_SERVER + res.data['poster']['url'],
        description: res.data['description'],
        genres: res.data['genres'].join(', '),
        season: `${res.data['season']['string']} ${res.data['season']['year']}`,
        type: res.data['type']['full_string'],
        team: {
          voice: res.data['team']['voice'].join(', '),
          timing: res.data['team']['timing'].join(', '),
          techs: res.data['team']['translator'].concat(res.data['team']['editing']).concat(res.data['team']['decor']).join(', ')
        },
        episodes: {
          current: res.data['player']['series']['last'],
          total: res.data['type']['series']
        },
        torrents: res.data['torrents']['list']
      }

      commit('insertAnimeData', anime_data);
    },

    async fetchTodayLibraryData({commit}) {
      const get_current_day_for_api = () => {
        // Возвращает текущую дату, подходящую для Anilibria API
        let day = new Date().getDay() - 1   // Отнимаем -1, так как AL API хранит дни от 0
        return day !== -1 ? day : 6  // Так как воскресенье у getDay - 0, а у AL API - 6
      }

      const check_new_title = (anime_timestamp) => (new Date().valueOf() * 0.001) - anime_timestamp < 86400

      await axios.get(`${process.env.VUE_APP_ANILIBRIA_API}getSchedule?days=${get_current_day_for_api()}&filter=id,names,status,poster.url,updated,last_change,torrents.series.last`)
          .then(res => {
            let titles = [];
            res.data[0]['list'].forEach(anime => {
              titles.push({
                name: anime['names']['ru'],
                img: process.env.VUE_APP_AL_STATICFILES_SERVER + anime['poster']['url'],
                episode: anime['torrents']['series']['last'],
                updated: anime['updated'],
                new_episode: check_new_title(anime['updated'])
              })
            })
            commit('updateTodayList', titles);
          })
    }
  },

  mutations: {
    updateLibrary(state, titles) {
      state.library = titles;
    },
    insertAnimeData(state, anime_data) {
      state.anime_data = anime_data;
    },
    updateTodayList(state, titles) {
      state.today_titles = titles;
    },
  }
}
