<template>
    <div>
        {{count}}
    </div>
    <button @click="clickAdd">add</button>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
    setup() {
        const count = ref(0)
        const clickAdd = () => {
            count.value += 1
        }
        let watchs = null
        watchs = watch(count, (n, o) => {
            console.log(n, o);
            if (watchs) {
                watchs() // 取消侦听的函数 ,即父组件的信息修改了，但子组件不在监听了
            }
        }, { immediate: true })
        return { count, clickAdd }
    }
})
</script>

<style scoped>
</style>