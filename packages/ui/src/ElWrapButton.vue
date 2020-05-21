<template>
  <el-button @click="onClick"><slot></slot></el-button>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    onClick: function(e: Event) {
      console.log("click");
      this.$emit("click");
    }
  }
});
</script>

<style>
.el-button {
}
</style>
