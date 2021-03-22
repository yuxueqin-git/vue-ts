<template>
    <div>使用mixins</div>
    <div>count:{{count}}</div>
    <div>message:{{message}}</div>
    <button @click="hello">点击</button>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { myMixin } from '../ultis/mixin'
export default defineComponent({
    extends: myMixin,// extends 和 mixins 类似
    // mixins: [myMixin],
    setup() {
        const count = ref(10)
        onMounted(() => {
            console.log(myMixin);
        })
        return {
            count,
        }
    }
})
</script>

<style scoped>
</style>