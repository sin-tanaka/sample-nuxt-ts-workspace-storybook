<template>
  <div class="container">
    <my-button>myButton</my-button>
    <el-wrap-button @click="callFetch">elButton</el-wrap-button>
    <user-list :users="users" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UserList from '@apps/components/UserList.vue'
import { User } from 'types'
import { usersModule } from '@apps/store'
import { ElWrapButton, MyButton } from 'ui'

export default Vue.extend({
  components: {
    UserList,
    MyButton,
    ElWrapButton
  },
  computed: {
    users(): User[] {
      return usersModule.users
    }
  },
  async created() {
    await this.callFetch()
  },
  methods: {
    async callFetch() {
      await usersModule.fetchUsers()
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
