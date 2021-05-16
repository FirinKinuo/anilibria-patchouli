import Vue from 'vue';
import Vuex from 'vuex';
/*
import auth from './modules/auth'
import animeCard from './modules/anime-card'*/

import Library from './modules/anime-data';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Library
  }
});