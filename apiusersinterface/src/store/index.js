import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './user';
import countriesModule from './countries'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: userModule,
    countries: countriesModule
  }
})