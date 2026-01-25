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
import { ref } from 'vue';

const current = ref(['tg'])
</script>

<style scoped></style>