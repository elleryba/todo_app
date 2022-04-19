import { MutationTree } from 'vuex'
import { Todo, TodoStoreInterface } from './types'

export class TodoMutations {
  public static CREATE_TODO = 'CREATE_TODO'
  public static DELETE_TODO = 'DELETE_TODO'
  public static UPDATE_TODO = 'UPDATE_TODO'
}

export const mutations: MutationTree<TodoStoreInterface> = {
  CREATE_TODO(state: TodoStoreInterface, payload: { todo: Todo }) {
    state.todos[payload.todo.id] = payload.todo
  },
  DELETE_TODO(state: TodoStoreInterface, payload: { id: number }) {
    const tempList = state.todos
    state.todos = tempList.filter((todo) => todo.id != payload.id)
  },
  UPDATE_TODO(state: TodoStoreInterface, payload: { todo: Todo }) {
      const tempList = state.todos
      tempList[payload.todo.id] = payload.todo
      state.todos = tempList
  }
}

export default mutations