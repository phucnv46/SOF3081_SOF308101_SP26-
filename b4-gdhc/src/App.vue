<script setup>
import { ref } from 'vue';

const items = ref([
  {
    key: 'dm',
    title: 'Danh mục',
    label: 'Danh mục',
    children: [
      {
        type: 'group',
        children:
          [
            {
              key: 'sub1',
              title: 'Quần áo nam',
              label: 'Quần áo nam',
              children:
                [
                  {
                    key: 'sub1',
                    title: 'Quần  nam',
                    label: 'Quần  nam'
                  },
                  {
                    key: 'sub2',
                    title: 'Áo  nam',
                    label: 'Áo  nam'
                  },
                ]
            }
          ]
      }
    ]
  }
])

const curentPage = ref(1)

</script>

<template>
  <a-layout class="layout">
    <a-layout-header>
      <div class="logo" />
      <a-menu :items="items" mode="horizontal" theme="dark">

      </a-menu>
    </a-layout-header>
    <a-layout-content style="min-height: 90vh;">
      <a-carousel autoplay dotPosition="bottom" arrows>
        <div v-for="(item, index) in 5" :key="index">
          <h3>{{ item }}</h3>
        </div>
      </a-carousel>

      <a-row :gutter="[24, 24]" style="margin: 24px 24px;">
        <a-col :span="6" v-for="(item, index) in 8" :key="index">
          <a-card hoverable style="width: 300px">
            <template #cover>
              <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
            </template>
            <template #actions>
              <setting-outlined key="setting" />
              <edit-outlined key="edit" />
              <ellipsis-outlined key="ellipsis" />
            </template>
            <a-card-meta title="Card title" description="This is the description">
              <template #avatar>
                <a-avatar src="https://joeschmoe.io/api/v1/random" />
              </template>
            </a-card-meta>
          </a-card>
        </a-col>

      </a-row>

      <a-row justify="center" align="center" style="margin-top: 24px;">
        <a-pagination v-model:current="curentPage" :total="500" showQuickJumper></a-pagination>
      </a-row>
    </a-layout-content>
    <a-layout-footer style="text-align: center;">FPT Polytechnic</a-layout-footer>
  </a-layout>
</template>

<style scoped>
.logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

:deep(.slick-slide) {
  text-align: center;
  height: 360px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

:deep(.slick-slide h3) {
  color: #fff;
}
</style>
