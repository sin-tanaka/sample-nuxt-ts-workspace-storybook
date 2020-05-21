<template>
  <div>
    <user-list-row v-for="(user, i) in users" :key="i" :user="user" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import UserListRow from '@apps/components/UserListRow.vue'

export default Vue.extend({
  components: {
    UserListRow,
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
