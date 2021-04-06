import Vue from 'vue';
import Vuex from 'vuex';

import today from './modules/today';
import library from './modules/library';
import auth from './modules/auth'
import animeCard from './modules/anime-card'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    today,
    library,
    auth,
    animeCard,
  }
});