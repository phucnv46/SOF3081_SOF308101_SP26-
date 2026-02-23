<template>
  <div>
    <h1>Trang A</h1>
  </div>
  <a-button type="primary" @click="dangXuat">Đăng xuất</a-button>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const dangXuat = () => {
  localStorage.removeItem("token");
  router.push("/login");
};
</script>

<style scoped></style>
