<template>
    <table border="1">
        <thead>
            <th v-for="(column, index) in columns" :key="column.key">
                {{ column.title }}
            </th>
        </thead>
        <tbody>
            <tr v-for="(record, index) in ds" :key="index || record.key" @click="handleRowClick(record, index)">
                <td v-for="(column, index) in columns" :key="index || column.key">
                    {{ record[column.dataIndex] }}
                    <slot name="bodyCell" v-if="$slots.bodyCell" :column="column" :record="record" :index="index">

                    </slot>
                </td>

            </tr>
        </tbody>
        <tfoot>

        </tfoot>
    </table>
</template>

<script setup>

const props = defineProps(['columns', 'ds']) // truyen thong tin tu con 
const emit = defineEmits(['rowClick'])

const handleRowClick = (record, index) => {
    emit('rowClick', record, index)
}

</script>