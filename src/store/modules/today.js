import axios from "axios";


function get_current_day_for_api() {
  // Возвращает текущую дату, подходящую для Anilibria API
  let day = new Date().getDay() - 1   // Отнимаем -1, так как AL API хранит дни от 0
  return day !== -1 ? day : 6  // Так как воскресенье у getDay - 0, а у AL API - 6
}

export default {
  state: {
    today_titles: []
  },

  getters: {
    getAllTodayTitles(state){
      return state.today_titles;
    }
  },

  actions: {
    async getTodayTitlesDataFromApi({commit}){
        let titles = []
        const res = await axios.get(
            `https://api.anilibria.tv/v2/getSchedule?days=${get_current_day_for_api()}&filter=id,names,status,poster.url,updated,last_change,torrents.series.last`
        );

        res.data[0]['list'].forEach(anime => {
            titles.push({
                name: anime['names']['ru'],
                img: "https://static.anilibria.tv/"+anime['poster']['url'],
                episode: anime['torrents']['series']['last'],
                updated: anime['updated']
            })
        })

      commit('updateTodayList', titles);

    }
  },

  mutations: {
    updateTodayList(state, titles){
      state.today_titles = titles;
    }
  }
}
