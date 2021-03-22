<template>
    <div class="home">
        <!-- <TestComponent msg="Welcome to Your Vue.js + TypeScript App" /> -->
        <div>
            <div>countRef:{{countRef}}</div>
            <div>countReactive.count1:{{countReactive.count1}}</div>
            <div>countReactive.count2:{{countReactive.count2}}</div>
            <div>state1:{{state1}}</div>
            <div>countComputed:{{countComputed}}</div>
            <div>watch监听count:<input v-model="count" /></div>
            <div>readonly:{{original.origin}}</div>
            <button @click="handleAdd">add</button>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRef, toRefs, computed, watch, readonly, watchEffect } from "vue"
// import TestComponent from '@/components/TestComponent.vue'; // @ is an alias to /src
// defineComponent ts类型的审查正确（该函数只返回传递给它的对象）
export default defineComponent({
    props: {
        title: String,
    },
    // props : 组件参数; context : 上下文人信息( 1.attrs 2.slots 3.emit 4.props 5.expose )
    setup(props, context) { //  在 props data computed methods 生命周期函数之前(因此 无法使用 data 和 methods的变量和方法) 运行，setup()函数 只能是同步的不能是异步的
        console.log(props, context);

        // Composition API 逻辑组织的入口
        const countRef = ref(1) //  ref() 创建的数据会触发模板更新
        const countReactive = reactive({ // 接受一个对象
            count1: 10,
            count2: 20
        })
        const countToRef = toRef(countReactive, "count2") // 将源响应式对象的属性创建一个 ref
        const state = reactive({
            state1: 2,
            state2: 3
        })
        const stateToRefs = toRefs(state) //  将响应式对象转换为普通的对象

        const countComputed = ref(1)
        // const plusOne = computed(() => countComputed.value++) // 结果是一个 ref代理对象，取值需要.value
        const plusOne = computed({
            get: () => countComputed.value + 5,
            set: (val) => countComputed.value = val
        })
        const count = ref(0)
        // watch 监听 count的变化
        watch(count, (newV, oldV) => {
            console.log('newV:', newV, 'oldV:', oldV);
        })

        const original = reactive({
            origin: 1
        })
        const originaReadonly = readonly(original)
        watchEffect(() => { // 只要有数据变化，这个函数都会执行
            console.log('original:', original.origin);
        })
        //Teleport
        const isModalOpen = ref(false)
        const user = reactive({
            name: 'jacky',
        })

        const removeUser = () => {
            console.log('removeUser')
        }

        const handleAdd = () => {
            countRef.value++;
            countReactive.count1++;
            countToRef.value++;
            state.state1++;
            count.value++;
            plusOne.value = 10; // 调用 set方法传值
            original.origin = 9  //  这里会触发 watchEffect
            console.log("countRef:", countRef);
            console.log("countReactive:", countReactive.count1);
            console.log("countToRef:", countToRef.value, countReactive.count2);
            console.log("stateToRefs:", state.state1, stateToRefs.state1.value);
            console.log("countComputed:", countComputed.value);
            console.log("plusOne:", plusOne.value);
        }
        return {
            countRef, // 必须return 才能 在模板使用
            countReactive,
            ...stateToRefs,
            countComputed,
            count,
            original,
            handleAdd
        }
    }
})
</script>
