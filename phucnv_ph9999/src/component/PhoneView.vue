<template>
  <div>
    <h1 class="text-center">Quản lý điện thoại</h1>

    <a-table :dataSource="ds" :columns="cols" :pagination="false">
      <template #bodyCell="{ column, record }">
        <a-button v-if="column.key === 'act'" type="link">Detail</a-button>
      </template>
    </a-table>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const dienThoai = reactive({
  id: -1,
  ten: "",
  hang: "",
  dungluong: "",
  gia: 0,
});

const ds = reactive([
  {
    id: 1,
    ten: "Iphone 17 pro max",
    hang: "SamSung",
    dungluong: "512gb",
    gia: 2000,
  },
]);

const cols = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Tên",
    dataIndex: "ten",
  },
  {
    title: "Hãng",
    dataIndex: "hang",
  },
  {
    title: "Dung lượng",
    dataIndex: "dungluong",
  },
  {
    title: "Giá",
    dataIndex: "gia",
  },
  {
    title: "Hành động",
    key: "act",
  },
];
</script>

<style scoped></style>
