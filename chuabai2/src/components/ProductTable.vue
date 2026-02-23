<template>
  <div class="my-5">
    <a-table :columns="cols" :dataSource="ds"></a-table>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const cols = [
  {
    title: "No",
    customRender: ({ record, index }) => index + 1,
  },
  {
    title: "Tên sản phẩm",
    dataIndex: "ten",
  },
  {
    title: "Trạng thái",
    dataIndex: "trangThai",
    customRender: ({ record, index }) =>
      record.trangThai ? "Còn hàng" : "Hết hàng",
  },
  {
    title: "Danh mục",
    dataIndex: "danhMuc",
  },
  {
    title: "Giá",
    dataIndex: "gia",
  },
];

const props = defineProps(["ds"]);
</script>

<style scoped></style>
