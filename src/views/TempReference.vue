<template>
    <div ref="root">this is root</div>
    <div
        v-for="(item,index) in list"
        :ref="el=>{if(el) divs[i] = el}"
        :key="index"
    >{{item}}</div>
    <div>{{plusOne}}</div>
    <input ref="email" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watchEffect, computed } from 'vue'
export default defineComponent({
    setup() {

        const root = ref(null)

        // v-for的使用
        const list = ref([1, 2, 3])
        const divs = ref([])
        // const refss =  this.$refs.email.$el.focus()
        onMounted(() => {
            console.log(root.value);

        })
        watchEffect(() => {
            console.log(root.value);
        }, {
            flush: 'post' // 页面渲染完成时 在触发此监听函数
        })

        const count = ref(0)
        const plusOne = computed(() => console.log(count.value))
        setTimeout(() => {
            count.value++
        }, 1000);

        return {
            root,
            list,
            divs,
            plusOne
        }
    }
})
</script>

<style>
</style>