<script setup>
import { ref } from 'vue';
import MyMenu from './components/MyMenu.vue';

const number = ref(0);
const strInput = ref('chuỗi ban đầu');
const mode = ref('vertical');
</script>

<template>
  <h1 v-if="number >= 10">You did it!</h1>
  <h1 v-else>Nhỏ hơn 10</h1>
  <p>{{ number }}</p>

  <button @click="number++">Tăng</button>
  <button @click="number--">Giảm</button>

  <hr />

  <input v-model="strInput" type="text">
  <p>Bạn đã nhập: {{ strInput }}</p>

  <hr />

  <label>Chọn hướng menu: </label>
  <select v-model="mode">
    <option value="horizontal">Ngang</option>
    <option value="vertical">Dọc</option>
  </select>

  <MyMenu :mode="mode"></MyMenu>
</template>