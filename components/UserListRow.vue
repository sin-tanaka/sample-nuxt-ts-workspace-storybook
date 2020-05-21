<template>
  <div>
    <span> {{ user.name }} </span>
    <span> {{ user.age }} </span>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    user: {
      type: Object,
      default: () => ({})
    }
  }
})
</script>
<style></style>
