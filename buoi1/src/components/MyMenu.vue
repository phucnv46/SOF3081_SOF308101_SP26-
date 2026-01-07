<template>
    <a-menu :items="menuItems" :mode="props.mode" theme="dark"></a-menu>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['mode'])

const menuItems = ref([
    {
        key: "dm1",
        title: 'danh mục 1',
        label: 'danh mục 1',

    },
    {
        key: "dm2",
        title: 'danh mục 2',
        label: 'danh mục 2',

    },
    {
        key: "dm3",
        title: 'danh mục 3',
        label: 'danh mục 3',

    },
])
</script>

<style scoped></style>