<template>
    <div>
        <h1>result</h1>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

interface Student {
    name: string
    class?: string
}

export default defineComponent({
    name: 'AsyncShow',
    setup() {
        const s: Student = {
            name: '22'
        }
        return new Promise((resolve) => {
            setTimeout(() => {
                return resolve({
                    result: '这是请求结果....'
                })
            }, 1000)
        })
    }
})
</script>

<style>
</style>