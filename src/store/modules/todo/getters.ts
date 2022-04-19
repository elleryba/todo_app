import { GetterTree } from 'vuex'
import { RootState } from '@/store/types'
import { TodoStoreInterface } from './types'

export class TodoGetters {
  public static All = 'todos/getAllTodos'
}

export const getters: GetterTree<TodoStoreInterface, RootState> = {
    getAllTodos: (state: TodoStoreInterface) => {
        return state.todos
    },
    getCompletedTodos: (state: TodoStoreInterface) => {
        return state.todos.map(x => x.isDone)
    },
    getUncompletedTodos: (state: TodoStoreInterface) => {
        return state.todos.map(x => !x.isDone)
    }
}

export default getters