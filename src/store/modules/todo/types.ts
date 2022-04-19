/** The Todo interface. */
export interface Todo {
    id: number
    item: string,
    isDone: boolean
}

/** The Todo store interface. Holds a collection of Todo items. */
export interface TodoStoreInterface {
    todos: Array<Todo>
}