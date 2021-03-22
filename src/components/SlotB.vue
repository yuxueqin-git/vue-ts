<template>
    <div @click="click">我是组件 B</div>
    <!-- <slot name="first"></slot>
    <slot name="three"></slot>
    <slot></slot>
    <slot name="second"></slot> -->
    <!-- <div
        v-for="(item,index) in 0"
        :key="index"
    >
        <slot
            :item="item"
            :items="'000'"
        ></slot>
    </div> -->
    <slot></slot>

</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
export default defineComponent({
    name: 'SlotB',
    emits: ['clicks'], // 这句必须要写 不然控制台报警告
    setup(props, context) {
        const click = () => {
            context.emit('clicks')
        }
        return {
            click
        }
    }

})
</script>

<style>
</style>