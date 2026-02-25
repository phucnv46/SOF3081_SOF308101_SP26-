<script setup>
import FFooter from "./layout/FFooter.vue";
import FHeader from "./layout/FHeader.vue";
</script>

<template>
  <FHeader />

  <router-view></router-view>

  <FFooter />
</template>

<style scoped></style>
