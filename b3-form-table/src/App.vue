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
      <a-input-number :min="0" v-model:value="newStudent.age" />
    </a-form-item>
    <a-form-item :wrapperCol="{ offset: 4, span: 6 }">
      <a-button type="primary" @click="handleAdd">Thêm</a-button>
    </a-form-item>
  </a-form>

  <a-table :dataSource="students" :columns="columns" :customRow="customRow">
    <template #bodyCell="{ record, column, index }">
      <template v-if="column.key === 'action'">
        <a-button type="primary" @click.stop="students.splice(index, 1)"
          style="background-color: #fa5f5f; color:#ffffff;">Xóa</a-button>
        <a-button type="primary" @click.stop="students[index] = { ...newStudent }"
          style="background-color: #2e2e; color:#ffffff;">Cập nhật</a-button>
      </template>
    </template>
  </a-table>
</template>

<script setup>
import { reactive } from 'vue';

const newStudent = reactive({ ten: '', gt: 'Nam', age: 0 });

const students = reactive([
  { ten: 'Nam', gt: 'Nam', age: 22 }
]);

// Hàm thêm sinh viên mới (Khắc phục lỗi tham chiếu)
const handleAdd = () => {
  if (!newStudent.ten) return alert("Vui lòng nhập tên");

  // Tạo bản sao để tránh việc Form và Table dùng chung 1 đối tượng
  students.push({ ...newStudent });

  // Reset form sau khi thêm
  newStudent.ten = '';
  newStudent.age = 0;
  newStudent.gt = 'Nam';
};

const columns = [
  { key: 'stt', title: 'STT', customRender: ({ index }) => index + 1 },
  { key: 'ten', title: 'Tên', dataIndex: 'ten' },
  { key: 'gt', title: 'Giới tính', dataIndex: 'gt' },
  { key: 'age', title: 'Tuổi', dataIndex: 'age' },
  { key: 'action', title: 'Hành động' },
];

const customRow = (record) => {
  return {
    onClick: () => {
      // Load lại thông tin lên form (Dùng spread để tránh tham chiếu ngược)
      Object.assign(newStudent, { ...record });
    },
  };
};
</script>

<style scoped>
:deep(.ant-table-row) {
  cursor: pointer;
}
</style>