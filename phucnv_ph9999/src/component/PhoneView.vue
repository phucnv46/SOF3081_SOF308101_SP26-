<template>
  <div>
    <h1 class="text-center">Quản lý điện thoại</h1>

    <a-form
      class="mt-5"
      :model="dienThoai"
      ref="formRef"
      :labelCol="{ offset: 4, span: 4 }"
      :wrapperCol="{ span: 10 }"
    >
      <a-form-item label="Tên" name="ten">
        <a-input v-model:value="dienThoai.ten"></a-input>
      </a-form-item>
      <a-form-item label="Hãng" name="hang">
        <a-select v-model:value="dienThoai.hang">
          <a-select-option
            :key="index"
            :value="hang"
            v-for="(hang, index) in hangs"
            >{{ hang }}</a-select-option
          >
        </a-select>
      </a-form-item>
      <a-form-item label="Dung lượng" name="dungLuong">
        <a-select v-model:value="dienThoai.dungluong">
          <a-select-option
            :key="index"
            :value="dl"
            v-for="(dl, index) in dungLuongs"
            >{{ dl }}</a-select-option
          >
        </a-select>
      </a-form-item>
      <a-form-item
        label="Giá"
        name="gia"
        :rules="{ min: 100, message: 'Phải lơn hơn 100' }"
      >
        <a-input-number
          v-model:value="dienThoai.gia"
          :min="100"
          :defaultValue="100"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="Tình trạng" name="tinhTrang">
        <a-radio-group v-model:value="dienThoai.tinhTrang">
          <a-radio :value="true">Còn hàng</a-radio>
          <a-radio :value="false">Hết hàng</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item :wrapperCol="{ offset: 8, span: 4 }">
        <a-popconfirm title="Bạn chắc chưa" @confirm="themDienThoai">
          <a-button type="primary">Add</a-button>
        </a-popconfirm>
      </a-form-item>
    </a-form>

    <a-table :dataSource="ds" :columns="cols" :pagination="false">
      <template #bodyCell="{ column, record }">
        <a-popconfirm
          v-if="column.key === 'act'"
          title="Chắc chưa"
          @confirm="
            () => {
              Object.assign(dienThoai, { ...record });
              router.push(`/phone/${dienThoai.id}/detail`);
            }
          "
        >
          <a-button type="link">Detail </a-button>
        </a-popconfirm>
      </template>
    </a-table>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue"; //Để hiển thị thông báo lỗi

const router = useRouter();

const formRef = ref(); // truy cập vào elenment trên html

const hangs = ["SamSung", "Apple", "Oppo"];

const dungLuongs = ["64GB", "128GB", "256GB", "512GB", "1TB"];

const dienThoai = reactive({
  id: -1,
  ten: "",
  hang: "SamSung",
  dungluong: "64GB",
  gia: 0,
  tinhTrang: true,
});

const ds = reactive([
  {
    id: 1,
    ten: "Iphone 17 pro max",
    hang: "SamSung",
    dungluong: "512gb",
    gia: 2000,
    tinhTrang: true,
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
    title: "Tình trạng",
    dataIndex: "tinhTrang",
    customRender: ({ record }) => {
      return record.tinhTrang ? "Còn hàng" : "Hết hàng";
    },
  },
  {
    title: "Hành động",
    key: "act",
  },
];

const themDienThoai = () => {
  // Tạo id mới

  if (!dienThoai.gia > 100) {
    // nếu điều kiện sai
    message.error("giá phải lớn hơn 100");
    return;
  }

  const ids = ds.map((dt) => dt.id); // lấy danh sách id

  let newID = ds.length === 0 ? 1 : Math.max(...ids) + 1;

  const dtCanThem = { ...dienThoai };
  dtCanThem.id = newID;

  ds.push(dtCanThem);

  router.push("/phone/add");
  message.info("Thêm điện thoại thành công");
  formRef.value.resetFields();
  // reset lại form
};
</script>

<style scoped></style>
