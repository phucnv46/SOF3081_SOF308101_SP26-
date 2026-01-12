<template>

  <a-form :model="newStudent" :labelCol="{ span: 4 }" :wrapperCol="{ span: 16 }">
    <a-form-item label="Tên" name="ten" :rules="[{ required: true, message: 'Không được bỏ trống' }]">
      <a-input v-model:value="newStudent.ten"></a-input>
    </a-form-item>
    <a-form-item label="Giới tính" name="gt">
      <a-select v-model:value="newStudent.gt">
        <a-select-option value="Nam">Nam</a-select-option>
        <a-select-option value="Nữ">Nữ</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="Tuổi" name="age">
      <a-input-number :min="0" v-model:value="newStudent.age">

      </a-input-number>
    </a-form-item>
    <a-form-item :wrapperCol="{ offset: 4, span: 6 }">
      <a-button type="primary" @click="students.push(newStudent)">Thêm</a-button>
    </a-form-item>

  </a-form>

  <a-table :dataSource="students" :columns="columns">
    <template #bodyCell="{ text, record, column, index }">
      <template v-if="column.key === 'action'">
        <a-button type="primary" @click.prevent="students.splice(index, 1)"
          style="background-color: #fa5f5f; color:#ffffff;">Xóa</a-button>
      </template>
    </template>
  </a-table>
</template>
<script setup>
import { reactive } from 'vue';

const newStudent = reactive(
  { ten: '', gt: 'Nam', age: 0 }
)

const students = reactive([
  { ten: 'Nam', gt: 'Nam', age: 22 }
])

const columns = [
  {
    key: 'stt',
    title: 'STT',
    customRender: ({ text, record, index }) => {
      return index + 1
    }
  },
  {
    key: 'ten',
    title: 'Tên',
    dataIndex: 'ten'
  },
  {
    key: 'gt',
    title: 'Giới tính',
    dataIndex: 'gt'
  },
  {
    key: 'age',
    title: 'Tuổi',
    dataIndex: 'age'
  },
  {
    key: 'action',
    title: 'Hành động',

  },

]

</script>