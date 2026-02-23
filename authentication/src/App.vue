<script setup></script>

<template>
  <a-menu mode="horizontal">
    <a-menu-item key="login">
      <router-link to="/login">Login</router-link>
    </a-menu-item>
    <a-menu-item key="a">
      <router-link to="/a">A</router-link>
    </a-menu-item>
  </a-menu>

  <router-view></router-view>
</template>

<style scoped></style>
