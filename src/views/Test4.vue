<template>
    <div @click="increment">
        dd
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, createApp } from 'vue'
import { h } from 'vue'
export default defineComponent({
    setup() {
        onMounted(() => {
            let a = null;
            if (a.length > 1) {
            }
        })


        const increment = () => {
            console.log('2sfsd');
        }
        return () =>
            h(
                'div',
                {
                    onClick: increment
                },
                '2222'
            )
    },
})
</script>

<style scoped>
</style>