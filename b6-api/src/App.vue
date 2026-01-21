<script setup>
import { onMounted, reactive, ref } from 'vue';
import axios from 'axios';
import { message } from 'ant-design-vue';

const posts = ref([]);
const post = reactive({
  title: '',
  views: 0,
});

const columns = [
  { dataIndex: 'id', title: 'ID' },
  { dataIndex: 'title', title: 'Title' },
  { dataIndex: 'views', title: 'Views' },
];

const fetchData = async () => {
  try {
    const res = await axios.get('http://localhost:3000/posts');
    posts.value = res.data;
  } catch (error) {
    console.error("Lỗi lấy dữ liệu:", error);
  }
};

const addPost = async () => {
  // Kiểm tra dữ liệu đầu vào
  if (!post.title) {
    return message.error("Vui lòng nhập Title");
  }

  try {
    // 1. Tính toán ID mới (Dùng let, không dùng const)
    let newId = posts.value.length === 0
      ? 1
      : Math.max(...posts.value.map(x => Number(x.id))) + 1;

    // 2. Gửi dữ liệu (Sử dụng await để đợi server phản hồi xong)
    await axios.post('http://localhost:3000/posts', {
      id: String(newId), // JSON server thường dùng string cho ID
      title: post.title,
      views: post.views
    });

    message.success("Thêm thành công!");

    // 3. Sau khi thêm xong mới fetch và reset
    await fetchData();
    resetForm();
  } catch (error) {
    message.error("Có lỗi xảy ra khi thêm!");
  }
};

const resetForm = () => {
  post.title = '';
  post.views = 0;
};

onMounted(() => {
  fetchData();
});
</script>

<template>
  <div style="padding: 20px;">
    <a-form :model="post" :labelCol="{ span: 4 }" :wrapperCol="{ span: 16 }">
      <a-form-item label="Title" required :rules="[{ required: true, message: 'Title đang trống', change: 'blur' }]">
        <a-input v-model:value="post.title" placeholder="Nhập tiêu đề..."></a-input>
      </a-form-item>
      <a-form-item label="Views">
        <a-input-number v-model:value="post.views" :min="0" style="width: 100%"></a-input-number>
      </a-form-item>

      <a-row>
        <a-col :offset="4">
          <a-button type="primary" @click="addPost">Thêm bài viết</a-button>
        </a-col>
      </a-row>
    </a-form>

    <a-divider />

    <a-table :dataSource="posts" :columns="columns" :rowKey="record => record.id">
    </a-table>
  </div>
</template>