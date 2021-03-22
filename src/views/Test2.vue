<template>
    <div class="user-card">
        <div>{{name}}</div>
        <button @click="deletes">删除用户</button>
        <Teleport to="#modal">
            <div v-show="isShow">

                <p>确定删除</p>
                <button @click="sure">确定</button>
                <button @click="reset">取消</button>
            </div>
        </Teleport>
    </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, ref } from 'vue'
export default defineComponent({
    name: 'Test2',
    setup() {
        const isShow = ref(false)
        const user = reactive({
            name: 'json'
        })
        const deletes = () => {
            isShow.value = true
            console.log('click deletes');
        }
        const sure = () => {
            delete user.name
            console.log('click sure');
        }
        const reset = () => {
            isShow.value = false
            console.log('click reset');
        }

        // Suspense 组件

        return {
            ...toRefs(user), // 这样写可以再页面直接写 user 对象的 name 属性
            deletes,
            sure,
            reset,
            isShow,
        }
    }
})
</script>

<style>
</style>