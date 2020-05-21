<template>
  <div>
    <div v-for="(user, i) in users" :key="i">
      <span> {{ user.name }} </span>
      <span> {{ user.age }} </span>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    users: {
      type: Array,
      default: () => []
    }
  }
})
</script>
<style></style>
