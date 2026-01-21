<script setup>
import { onMounted, reactive, ref } from 'vue';
import Table from 'ant-design-vue/es/table/Table';
import axios from 'axios';
import { message } from 'ant-design-vue';

const posts = ref([]);
const post = reactive(
  {
    id: -1,
    title: '',
    views: 0,
  }
)

const columns = [
  {
    dataIndex: 'id',
    title: 'id'
  },
  {
    dataIndex: 'title',
    title: 'title'
  },
  {
    dataIndex: 'views',
    title: 'views'
  },
]

const fetchData = () => {
  axios.get('http://localhost:3000/posts'.trim()).then(
    res => posts.value = res.data
  )
}

const addPost = () => {
  const newId = 1;
  if (posts.value.length === 0) {
    newId = 1;
  } else {
    newId = Math.max(...posts.value.map(x => x.id)) + 1;
  }
  post.id = newId
  axios.post('http://localhost:3000/posts', { ...post }).then(
    res => console.log(res)
  )

  fetchData();
  resetForm()
}

const resetForm = () => {
  post.id = -1
  post.title = '',
    post.views = 0
}

onMounted(() => {
  fetchData()
})

</script>

<template>


  <a-form :model="post" :labelCol="{ offset: 4, span: 2 }" :wrapperCol="{ span: 12 }">
    <a-form-item label="title" name="title" required :rules="[{ required: true, message: 'Không được để trống' }]">
      <a-input v-model:value="post.title"></a-input>
    </a-form-item>
    <a-form-item label="views">
      <a-input-number v-model:value="post.views" :min="0"></a-input-number>
    </a-form-item>
  </a-form>

  <a-row style="margin-bottom: 20px;">
    <a-col :offset="6">
      <a-button type="primary" @click.prevent.stop="addPost">Thêm</a-button>
    </a-col>
  </a-row>

  <a-table :dataSource="posts" :columns="columns">

  </a-table>



</template>

<style scoped></style>
