<template>
    <h1 style="text-align: center; margin: 30px;">Quản lý tác giả</h1>
    <a-form :model="tacgia" :labelCol="{ offset: 4, span: 4 }" :wrapperCol="{ span: 10 }">
        <a-form-item name="ten" label="Tên">
            <a-input v-model:value="tacgia.ten"></a-input>
        </a-form-item>
        <a-form-item name="gioiTinh" label="Giới tính">
            <a-radio-group v-model:value="tacgia.gioiTinh">
                <a-radio :value="true">Nam</a-radio>
                <a-radio :value="false">Nữ</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item name="diaChi" label="Địa chỉ">
            <a-input v-model:value="tacgia.diaChi"></a-input>
        </a-form-item>
        <a-form-item name="tuoi" label="Tuổi">
            <a-input-number v-model:value="tacgia.tuoi" :min="0"></a-input-number>
        </a-form-item>
    </a-form>

    <a-row style="margin: 25px;">
        <a-col :offset="8">
            <a-button type="primary" @click="themTacGia">Thêm</a-button>
        </a-col>
        <a-col :offset="8">
            <a-popconfirm title="Bạn có chắc muốn xóa" okText="Có" cancelText="Không" @confirm="xoaTacGia">
                <a-button type="primary">Xóa</a-button>
            </a-popconfirm>
        </a-col>
    </a-row>

    <a-table :dataSource="ds" :columns="columns" :customRow="(record, index) => {
        return {
            onClick: (e) => {
                Object.assign(tacgia, { ...record })
            }
        }
    }"></a-table>
</template>

<script setup>
import { reactive } from 'vue';
import { message } from 'ant-design-vue'
import { useRouter } from 'vue-router';

const router = useRouter();
const tacgia = reactive({ id: -1, ten: '', gioiTinh: true, diaChi: '', tuoi: 18 })

const ds = reactive([{ id: 1, ten: 'Mark', gioiTinh: true, diaChi: '@mdo', tuoi: 10 }])

const columns = [
    {
        title: 'No',
        customRender: ({ record, index }) => {
            return index + 1
        }
    },
    {
        title: 'Tên',
        dataIndex: 'ten'
    },
    {
        title: 'Giới tính',
        dataIndex: 'gioiTinh',
        customRender: ({ record, index }) => {
            return record.gioiTinh ? 'Nam' : 'Nữ';
        }
    },
    {
        title: 'Địa chỉ',
        dataIndex: 'diaChi'
    },
    {
        title: 'tuổi',
        dataIndex: 'tuoi'
    },
]

const themTacGia = () => {
    let newID = ds.length === 0 ? 1 : Math.max(...ds.map(tg => Number(tg.id))) + 1
    tacgia.id = newID
    try {
        if (!tacgia.ten) {
            message.error('Thiếu tên tác giả');
            return;
        }

        if (!tacgia.diaChi) {
            message.error('Thiếu dia chỉ tác giả');
            return;
        }

        ds.push({ ...tacgia })
        router.push('/tacgia/add')
        message.success('Thêm thành công')
        resetForm()
    } catch (error) {
        message.error(error.message)
    }

}


const resetForm = () => {
    tacgia.id = -1
    tacgia.gioiTinh = true
    tacgia.diaChi = ''
    tacgia.ten = ''
    tacgia.tuoi = 18
}


const xoaTacGia = () => {
    if (tacgia.id === -1) {
        message.error('Chưa chọn tác giả nào!')
        return;
    }

    const index = ds.findIndex(tg => tg.id === tacgia.id);
    ds.splice(index, 1);
    router.push(`/tac-gia/${tacgia.id}/remove`)
    message.success('Xóa thành công')
}

</script>

<style scoped></style>