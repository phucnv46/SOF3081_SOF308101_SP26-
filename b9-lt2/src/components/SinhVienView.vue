<template>
    <div>
        <h1 style="text-align: center;" class="m-5">Quản lý sinh viên</h1>
        <a-form :model="sv" :labelCol="{ offset: 4, span: 4 }" :wrapperCol="{ span: 10 }">
            <a-form-item name="hoTen" label="Họ tên">
                <a-input v-model:value="sv.hoTen"></a-input>
            </a-form-item>
            <a-form-item name="gioiTinh" label="Giới tính">
                <a-radio-group v-model:value="sv.gioiTinh">
                    <a-radio :value="true">Nam</a-radio>
                    <a-radio :value="false">Nữ</a-radio>
                </a-radio-group>
            </a-form-item>
            <a-form-item name="nganhHoc" label="Ngành học">
                <a-select v-model:value="sv.nganhHoc">
                    <a-select-option key="ptpm" value="ptpm">Phát triển phần mềm</a-select-option>
                    <a-select-option key="ltw" value="ltw">Lập trình web</a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item name="tuoi" label="Tuổi">
                <a-input-number v-model:value="sv.tuoi" :min="18"></a-input-number>
            </a-form-item>
        </a-form>

        <a-row class="m-4">
            <a-col :offset="8" :span="4">
                <a-button type="primary">Thêm</a-button>
            </a-col>
            <a-col :offset="4" :span="4">
                <a-button type="primary" style="background-color: #2fe111;">Sửa</a-button>
            </a-col>
        </a-row>

    </div>

    <a-table :dataSource="ds" :columns="cols"></a-table>
</template>

<script setup>
import { reactive, ref } from 'vue';


const sv = reactive({ id: -1, hoTen: '', gioiTinh: true, nganhHoc: '', tuoi: 18 });

const ds = reactive([{ id: 1, hoTen: 'Nguyễn Văn Phúc', gioiTinh: true, nganhHoc: 'ktpm', tuoi: 18 }])

const cols = [
    {
        key: 'stt',
        title: 'STT',
        customRender: ({ record, index }) => index + 1
    },
    {
        key: '',
        dataIndex: 'id',
        title: 'ID'
    },
    {
        key: 'ht',
        dataIndex: 'hoTen',
        title: 'Họ tên'
    },
    {
        key: 'gt',
        dataIndex: 'gioiTinh',
        title: 'Giới tính',
        customRender: ({ record, index }) => record.gioiTinh ? "Nam" : "Nữ"
    },
    {
        key: 'nh',
        dataIndex: 'nganhHoc',
        title: 'Ngành học'
    },
    {
        key: 'age',
        dataIndex: 'tuoi',
        title: 'Tuổi'
    },
]

</script>

<style scoped></style>