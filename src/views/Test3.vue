<template>
    <div>
        dd
    </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, ref } from 'vue'
export default defineComponent({
    name: 'Test3',
    setup() {
        const response = ref([])
        const getUser = (va: string): string => {
            console.log('i am getUser...');
            return '11'

        }
        getUser('dd')
        onMounted: {
            getUser('dd')
        }
        // (

        // )
    }
})
</script>

<style>
</style>