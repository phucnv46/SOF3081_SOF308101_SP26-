<template>
  <div class="m-5">
    <h1 class="text-center">Quản lý sản phẩm</h1>

    <a-form
      ref="formRef"
      :model="sanpham"
      class="my-5"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 14 }"
    >
      <a-form-item
        label="Tên SP"
        name="ten"
        :rules="[
          { required: true, message: 'Không được để trống', trigger: 'blur' },
        ]"
      >
        <a-input v-model:value="sanpham.ten" placeholder="Nhập tên sản phẩm" />
      </a-form-item>

      <a-form-item label="Trạng thái" name="trangThai">
        <a-radio-group v-model:value="sanpham.trangThai">
          <a-radio :value="true">Còn hàng</a-radio>
          <a-radio :value="false">Hết hàng</a-radio>
        </a-radio-group>
      </a-form-item>

      <a-form-item
        label="Danh mục"
        name="danhMuc"
        :rules="[
          { required: true, message: 'Không được để trống', trigger: 'blur' },
        ]"
      >
        <a-input v-model:value="sanpham.danhMuc" placeholder="Tên danh mục" />
      </a-form-item>

      <a-form-item label="Giá" name="gia">
        <a-input-number
          v-model:value="sanpham.gia"
          :min="0"
          style="width: 100%"
        />
      </a-form-item>
    </a-form>
    <a-row>
      <a-col :span="2" :offset="6">
        <a-button type="primary" @click="handleAdd">Thêm</a-button>
      </a-col>
      <a-col :span="2" :offset="14">
        <a-button type="primary">Sửa</a-button>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import { ref } from "vue";

// defineModel cho phép đồng bộ object sanpham với component cha

const formRef = ref();

const sanpham = defineModel("sp", {
  type: Object,
  default: () => ({
    id: -1,
    ten: "",
    trangThai: true,
    danhMuc: "",
    gia: 0,
  }),
});

const emit = defineEmits(["add", "update"]);

function handleAdd() {
  emit("add");
  formRef.value.resetFields();
}
</script>
