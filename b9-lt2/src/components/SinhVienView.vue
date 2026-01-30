<template>
    <div>
        <h1 style="text-align: center;" class="m-5">Quản lý sinh viên</h1>
        <a-form :model="sv" :labelCol="{ offset: 4, span: 4 }" :wrapperCol="{ span: 10 }">
            <a-form-item name="hoTen" label="Họ tên"
                :rules="[{ required: true, message: 'Họ tên không được để trống' }]">
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
                    <a-select-option key="ptpm" value="Phát triển phần mềm">Phát triển phần mềm</a-select-option>
                    <a-select-option key="ltw" value="Lập trình web">Lập trình web</a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item name="tuoi" label="Tuổi">
                <a-input-number v-model:value="sv.tuoi" :min="18"></a-input-number>
            </a-form-item>
        </a-form>

        <a-row class="m-4">
            <a-col :offset="8" :span="4">
                <a-button type="primary" @click.prevent="themSV">Thêm</a-button>
            </a-col>
            <a-col :offset="4" :span="4">
                <a-button type="primary" class="bg-success" @click="open = true">Sửa</a-button>
            </a-col>
        </a-row>

    </div>

    <a-table :dataSource="ds" :columns="cols" :customRow="(record, index) => {
        return {
            onClick: (e) => {
                Object.assign(sv, { ...record })

            }
        }
    }"></a-table>


    <a-modal v-model:open="open" :okText="`Có`" :cancelText="'Hông'" @ok="capNhatSinhVien" title="Sure????">
        <p>Bạn có chắc muốn cập nhật không</p>
    </a-modal>

</template>

<script setup>
import { message } from 'ant-design-vue';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const open = ref(false)

const sv = reactive({ id: -1, hoTen: '', gioiTinh: true, nganhHoc: 'Phát triển phần mềm', tuoi: 18 });

const ds = reactive([{ id: 1, hoTen: 'Nguyễn Văn Phúc', gioiTinh: true, nganhHoc: 'Phát triển phần mềm', tuoi: 18 }])

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


function themSV() {


    if (!sv.hoTen) {
        message.error('Họ tên đang trống');
        return;
    }

    // neu list dang trong thi id = 1, list co phan tu thi id moi = id lon nhat + 1
    let newId = ds.length === 0 ? 1 : Math.max(...ds.map(sv => sv.id)) + 1;
    sv.id = newId


    const svMoi = { ...sv }


    ds.push(svMoi)
    router.push('/sv/add') // đổi route

    clearForm()
    message.success('thêm thành công')



}

function clearForm() {
    sv.id = -1
    sv.hoTen = ''
    sv.gioiTinh = true
    sv.nganhHoc = 'Phát triển phần mềm'
    sv.tuoi = 18


}

function capNhatSinhVien() {


    try {

        if (sv.id === -1) {
            message.error('Chưa chọn sv cần cập nhật');
            open.value = false;
            return;
        }

        if (!sv.hoTen) {
            open.value = false;
            message.error('thiếu tên sinh viên');
            return;
        }


        const svCapNhat = ds.find(s => s.id === sv.id)
        Object.assign(svCapNhat, { ...sv })

        message.success('Cập nhật thành công!');

        router.push(`/sv/${sv.id}/update`)

        clearForm();

        open.value = false
    } catch (error) {

    }
}

</script>

<style scoped></style>