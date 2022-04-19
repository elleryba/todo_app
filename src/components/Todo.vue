<template>
  <div>
    <v-container>
      <v-row justify="space-around">
        <v-card>
          <v-img contain :src="listImg" />
          <v-card-actions>
            <v-btn @click="createTodo">Add Todo</v-btn>
          </v-card-actions>
          <v-card-title>Todo List</v-card-title>
          <v-timeline
            v-if="hasTodos"
            align-top
            dense
          >
            <v-timeline-item
              v-for="todo in todos"
              :key="todo.id"
              :color="green"
              small
            >
              <div>{{ todo.item }}</div>
            </v-timeline-item>
          </v-timeline>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { isEmpty } from 'lodash'
import { computed, defineComponent, ref } from '@vue/composition-api'
import store from '@/store'
import { TodoGetters } from '@/store/modules/todo/getters'
import { Todo } from '@/store/modules/todo/types'

export default defineComponent({
  name: 'TodoList',
  data: () => ({
    listImg: require('@/assets/todo_list.png')
  }),
  setup() {
    const hasTodos = ref<boolean>(false)
    const todos = computed<Array<Todo>>(() => store.getters[TodoGetters.All])

    while(isEmpty(todos)) hasTodos.value = false

    return {
      hasTodos,
      todos
    }
  }
})
</script>