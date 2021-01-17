import Vue from 'vue'
import Vuex from 'vuex'
import { LoginStore } from '@/modules/login/store'
import { AuthorStore } from '@/modules/author/store';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    login: { ...LoginStore },
    author: { ...AuthorStore }
  },
})

export default store
