<template>
    <div>
        <ProductForm v-model:sp="sp" @add="themSanPham" />
        <ProductTable :ds="ds" />
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import ProductForm from './ProductForm.vue';
import ProductTable from './ProductTable.vue';
import { message } from 'ant-design-vue'

const sp = reactive({
    id: -1,
    ten: "",
    trangThai: true,
    danhMuc: "",
    gia: 0
})


const ds = reactive([
    { id: 1, ten: 'Macbook', trangThai: true, danhMuc: 'Laptop', gia: 4500 }
])

const themSanPham = () => {

    if (!sp.ten) {
        message.error('tên không được bỏ trống')
        return;
    }
    if (!sp.danhMuc) {
        message.error('danh muc không được bỏ trống')
        return;
    }

    let newId = ds.length === 0 ? 1 : Math.max(...ds.map(sp => sp.id)) + 1;
    const sanPhamMoi = { ...sp, id: newId }
    ds.push(sanPhamMoi)
}

</script>

<style scoped></style>