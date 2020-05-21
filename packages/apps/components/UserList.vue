<template>
  <div>
    <my-button>myButton</my-button>
    <el-wrap-button>elButton</el-wrap-button>
    <user-list-row v-for="(user, i) in users" :key="i" :user="user" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import UserListRow from '@apps/components/UserListRow.vue'
import { MyButton, ElWrapButton } from 'ui'

export default Vue.extend({
  components: {
    UserListRow,
    MyButton,
    ElWrapButton
  },
  props: {
    users: {
      type: Array,
      default: () => []
    }
  }
})
</script>
<style></style>
