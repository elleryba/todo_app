import Vue from 'vue'
import Vuex from 'vuex'
import { RootState } from '@/store/types'
import todo from './modules/todo'

Vue.use(Vuex)

export default new Vuex.Store<RootState>({
  modules: {
    todo
  }
})