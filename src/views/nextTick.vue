<template>
    <div>
        {{message}}
    </div>
    <button @click="changeMessage('ddd')">update</button>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref } from 'vue'

export default defineComponent({
    setup() {
        const message = ref('hello');
        const changeMessage = async newM => {
            message.value = newM;
            await nextTick(); // 数据修改后，更新完dom后再进行nextTick(（）=>{})这个回调函数
            console.log('not dom is updated');

        }

        return {
            message,
            changeMessage
        }
    }
})
</script>

<style scoped>
</style>