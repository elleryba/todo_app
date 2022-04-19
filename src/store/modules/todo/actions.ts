import { ActionTree } from 'vuex'
import { RootState } from '@/store/types'
import { Todo, TodoStoreInterface } from './types'
import { TodoMutations } from './mutations'

export class TodoActions {
  /** Creates a new Todo. */
  public static CreateTodo = 'todos/create'

  /** Deletes a Todo. */
  public static DeleteTodo = 'todos/delete'

  /** Updates a Todo. */
  public static UpdateTodo = 'todos/update'
}

export const actions: ActionTree<TodoStoreInterface, RootState> = {
    create({ commit }, payload: { todo: Todo }) {
        commit(TodoMutations.CREATE_TODO, { todo: payload.todo })
    },
    delete({ commit }, payload: { id: number }) {
        commit(TodoMutations.DELETE_TODO, { id: payload.id })
    },
    update({ commit }, payload: { todo: Todo }) {
        commit(TodoMutations.UPDATE_TODO, { todo: payload.todo })
    }
}

export default actions