<template>
  <div>
    <v-container>
      <v-row justify="space-around">
        <v-card>
          <v-img contain :src="listImg" />
          <v-card-title>Todo List</v-card-title>
          <v-timeline
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
import { computed, defineComponent } from '@vue/composition-api'
import store from '@/store'
import { TodoGetters } from '@/store/modules/todo/getters'
import { Todo } from '@/store/modules/todo/types'

export default defineComponent({
  name: 'TodoList',
  data: () => ({
    listImg: require('@/assets/todo_list.png')
  }),
  setup() {
    const todos = computed<Array<Todo>>(() => store.getters[TodoGetters.All])

    return {
      todos
    }
  }
})
</script>