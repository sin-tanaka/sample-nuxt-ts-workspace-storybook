<template>
  <div class="container">
    <user-list :users="users" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UserList from '@apps/components/UserList.vue'
import { User } from 'types'

export default Vue.extend({
  components: {
    UserList
  },
  computed: {
    // mock users
    users: (): User[] => {
      return [
        { name: 'Giorno Giovana', age: 20 },
        { name: 'John Mayer', age: 30 },
        { name: 'Michel Jackson', age: 44440 }
      ]
    }
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
}
</style>
