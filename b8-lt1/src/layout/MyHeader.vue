<template>
    <div>
        <a-menu mode="horizontal" v-model:selectedKeys="current">
            <a-menu-item key="tg">
                <router-link to="/tacgia">Trang chủ</router-link>
            </a-menu-item>
            <a-menu-item key="pages">
                <router-link to="/page">Pages</router-link>
            </a-menu-item>
        </a-menu>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

// Sửa lỗi mỗi khi reload path không khớp với menu
// computed => tạo ra tham chiếu mới từ tham chiếu cũ bắt buộc phải viết dạng hàm
const current = computed(() => {
    if (route.path === '/tacgia') return ['tg'];
    if (route.path === '/page') return ['pages'];
    return [];
});

</script>

<style scoped></style>