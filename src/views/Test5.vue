<template>
    <div id="apps">
        <button v-on:click="addToCart">Add to cart</button>
        <p>Cart({{ cart }})</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onRenderTracked, onRenderTriggered } from 'vue'

export default defineComponent({
    setup() {
        const cart = ref(0)
        const addToCart = () => {
            cart.value += 1
        }
        // 状态跟踪 跟踪 虚拟dom 重新 渲染时 调用
        // 踪页面上 所有 响应式变量 和 方法 的状态(即return 中的值)
        onRenderTracked(({ key, target, type }) => {
            // onRenderTracked((event) => {
            console.log("renderTracked:", { key, target, type })
        })
        // 状态触发 它不会跟踪每一个值，而是给你变化值的信息，并且新值和旧值都会给你明确的展示出来。
        // onRenderTriggered(({ key, target, type }) => {
        onRenderTriggered((event) => {
            console.log(event);

            // console.log("renderTriggered:", { key, target, type })
        })
        return { cart, addToCart }
    },
})
</script>

<style scoped>
</style>