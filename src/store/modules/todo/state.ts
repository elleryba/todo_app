import { Todo, TodoStoreInterface } from './types'

export const state: TodoStoreInterface = {
  todos: [] as Array<Todo>
}

export default state