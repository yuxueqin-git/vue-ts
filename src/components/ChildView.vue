<template>
    <!-- 父组件传递过来的数据将作为 此页面根元素的的特性 -->
    <div class='child-view'>
        <p>儿子组件</p>
        {{ $attrs }}
        <hr>
        <GrandChild v-bind="$attrs"></GrandChild>
    </div>
</template>

<script lang='ts'>
import GrandChild from '../components/GrandChild.vue'
import { defineComponent, onMounted } from 'vue'
export default defineComponent({
    name: 'ChildView',
    // 继承所有父组件的内容
    inheritAttrs: true, // 通过控制台可以查看 父组件传递过的数据 是否 作为特性 显示在 子组件的根元素上
    components: { GrandChild },

    setup(props) {

        return {}
    }
})
</script>

<style lang="scss">
.child-view {
    margin: 20px;
    border: 2px solid red;
    padding: 20px;
}
</style>
