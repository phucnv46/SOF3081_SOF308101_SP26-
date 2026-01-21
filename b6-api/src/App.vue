<script setup>
import { onMounted, ref } from 'vue';
import Table from 'ant-design-vue/es/table/Table';
import axios from 'axios';

const products = ref(null);


const columns = [
  {
    dataIndex: 'id',
    title: 'id'
  },
  {
    dataIndex: 'title',
    title: 'title'
  },
]

const fetchData = () => {
  axios.get('https://jsonplaceholder.typicode.com/posts').then(
    res => products.value = res.data
  )
}

onMounted(() => {
  fetchData()
})

</script>

<template>

  <a-table :dataSource="products" :columns="columns">

  </a-table>

</template>

<style scoped></style>
