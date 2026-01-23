<script setup>
import { onMounted, reactive, ref } from 'vue';
import axios from 'axios';
import { message } from 'ant-design-vue';

const isEdit = ref(false)
const posts = ref([]);
const post = reactive({
  title: '',
  views: 0,
});

const columns = [
  { dataIndex: 'id', title: 'ID' },
  { dataIndex: 'title', title: 'Title' },
  { dataIndex: 'views', title: 'Views' },
  { key: 'action', title: 'Hành động' },
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


const updatePost = () => {
  axios.put(`http://localhost:3000/posts/${post.id}`, { ...post }).then(
    res => {
      if (res.status === 200) {
        message.success('Cập nhật post thành công!')
        fetchData();
      } else {
        message.error('Có lỗi về mạng')
      }
    }
  ).catch(error => {
    message.error(error.message)
  })
}


const deletePost = (id) => {
  axios.delete(`http://localhost:3000/posts/${id}`).then(
    res => {
      if (res.status === 200) {
        message.success('Xóa post thành công!')
        fetchData();
      } else {
        message.error('Có lỗi về mạng')
      }
    }
  ).catch(error => {
    message.error(error.message)
  })
}

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
          <a-button type="primary" @click="addPost" v-if="isEdit === false">Thêm bài viết</a-button>
          <a-button type="primary" @click="updatePost" v-if="isEdit === true">Cập nhật</a-button>
          <a-button type="primary" @click="isEdit = false" v-if="isEdit === true"
            style="margin-left: 15px;background-color: #a2ae12;">Hủy</a-button>
        </a-col>
      </a-row>
    </a-form>

    <a-divider />

    <a-table :dataSource="posts" :columns="columns" :rowKey="record => record.id">
      <template #bodyCell="{ record, column }">
        <div v-if="column.key === 'action'">
          <a-button type="primary" @click="() => {
            isEdit = true;
            Object.assign(post, { ...record })
          }">Sửa</a-button>
          <a-divider type="vertical"></a-divider>
          <a-popconfirm title="Chắc chưa?" okText="Chắc" cancelText="Hông" @confirm="deletePost(record.id)">
            <a-button type="primary" style="background-color: crimson;">Xóa</a-button>
          </a-popconfirm>
        </div>
      </template>
    </a-table>
  </div>
</template>