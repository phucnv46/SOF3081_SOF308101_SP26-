<script setup>
import PolyFooter from './layout/PolyFooter.vue';
import PolyHeader from './layout/PolyHeader.vue';

</script>

<template>
  <PolyHeader />
  <router-view></router-view>
  <PolyFooter text="FPT Polytechnic" />
</template>

<style scoped></style>
