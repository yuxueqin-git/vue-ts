<template>
    <div>
        <button @click='transmitClick(666)'>祖孙组件 使用$attrs（通过子组件过渡） 传递</button>
        <!-- 儿子组件 -->
        <ChildView
            class="pra"
            :is-show="isOpen"
            :row="row"
        >
        </ChildView>
    </div>
</template>

<script lang='ts'>
import ChildView from '../components/ChildView.vue'
import { defineComponent, reactive, ref, toRefs, getCurrentInstance, createApp } from 'vue'
export default defineComponent({
    name: 'Test6',
    components: { ChildView },
    setup(props) {

        const ctx = getCurrentInstance()
        console.log("foo::", (ctx as any).ctx.foo);

        let isOpen = ref(false);
        let row = ref(333);

        const transmitClick = (r) => {
            isOpen.value = true;
            row.value = r
            console.log('parent::', row);
        }
        return {
            row,
            isOpen,
            transmitClick
        }
    },
})

</script>
