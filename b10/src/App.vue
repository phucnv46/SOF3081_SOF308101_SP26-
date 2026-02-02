<script setup>
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons-vue';
import quanao from './data';
import { reactive } from 'vue';

const ds = reactive(quanao)
const formatter = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
});
</script>

<template>
  <a-row style="height: 80px; border-bottom: 3px; margin-bottom: 50px;" align="middle">
    <a-col :span="2" :offset="1">
      <a-image src="https://upload.wikimedia.org/wikipedia/commons/2/20/FPT_Polytechnic.png" />
    </a-col>

    <a-col :span="6" :offset="2">
      <a-menu mode="horizontal">
        <a-menu-item>
          Home
        </a-menu-item>
        <a-menu-item>
          Categories
        </a-menu-item>
        <a-menu-item>
          About
        </a-menu-item>
      </a-menu>
    </a-col>

    <a-col :span="7" :offset="1">
      <a-input-search placeholder="Input search hear"></a-input-search>
    </a-col>

    <a-col :span="2" :offset="3">
      <ShoppingCartOutlined style="font-size: large; margin-right: 20px;" />
      <UserOutlined style="font-size: large;" />
    </a-col>

  </a-row>


  <a-row :gutter="[20, 20]">
    <a-col :span="6" :offset="2">
      <h1>Filter</h1>
    </a-col>
    <a-col :span="16">
      <a-row :gutter="[0, 50]">
        <a-col :span="8" v-for="(qa, index) in ds" :key="index">

          <a-card hoverable style="width: 240px; height:33em">
            <template #cover>
              <img alt="example" :src="qa.hinhAnh" />
            </template>
            <a-card-meta :title="qa.ten">
              <template #description>{{ formatter.format(qa.gia) }}</template>
            </a-card-meta>
          </a-card>

        </a-col>
      </a-row>
    </a-col>
  </a-row>

</template>

<style scoped></style>
