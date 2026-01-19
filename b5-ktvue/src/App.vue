<script setup>
import { ref } from 'vue';
import FTable from './components/FTable.vue';

const columns = ref([
  {
    title: 'Ten',
    dataIndex: 'ten'
  },
  {
    title: 'tuoi',
    dataIndex: 'tuoi'
  },
  {
    title: 'Gioi tinh',
    dataIndex: 'gioitinh'
  },
  {
    key: 'action',
    title: 'Hanh Dong',

  },
])


const students = ref([
  {
    ten: 'Phuc',
    tuoi: 20,
    gioitinh: 'Nam'
  }
])


</script>

<template>
  <FTable :columns="columns" :ds="students" @row-click="(record, index) => console.log(record)">
    <template #bodyCell="{ record, index, column }">
      <div v-if="column.key === 'action'">
        <button>Sửa</button>
        ||
        <button>Xoá</button>
      </div>
    </template>
  </FTable>
</template>

<style scoped></style>
