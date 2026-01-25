<script setup>
import MyFooter from './layout/MyFooter.vue';
import MyHeader from './layout/MyHeader.vue';

</script>

<template>

  <MyHeader></MyHeader>

  <router-view></router-view>

  <MyFooter :text="'Footer: FPT Polytechnic'"></MyFooter>


</template>

<style scoped></style>
