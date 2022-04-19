<template>
  <v-app>
    <v-main>
      <TodoList />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import TodoList from '@/components/Todo.vue'

export default Vue.extend({
  name: 'App',
  components: {
    TodoList,
  }
})
</script>
