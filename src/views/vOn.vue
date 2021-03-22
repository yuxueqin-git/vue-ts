<template>
    <div>
        <!-- <input @keyup.enter="clickEvent" /> -->
        <button @click="clickEvent">提交</button>
        <!-- <input
            type="text"
            v-model.lazy="message"
        > -->
        <input
            v-model.lazy="message"
            @change="clickEvent"
        >
    </div>
    <div>{{message}}</div>
    <div>{{foo}}</div>
    <div>{{foo2}}</div>
</template>

<script lang="ts">
import { defineComponent, isProxy, markRaw, onMounted, reactive, ref, toRaw, computed, watch, getCurrentInstance } from 'vue'

export default defineComponent({
    setup() {

        const message = ref('')
        const foo = reactive({ g: 3 })
        const foo2 = markRaw({ f: 2 }) // 返回对象本身，不能被转换为代理对象
        const count = ref(1)
        const plusOne = computed({
            get: () => count.value + 1,
            set: val => {
                count.value = val - 1
            }
        })
        plusOne.value++
        // plusOne.value++ // error
        onMounted(() => {
            console.log("foo::", foo);
            console.log("foo2::", foo2);
            console.log("toRaw(foo):", toRaw(foo)); // 返回 reactive 或 readonly 代理的原始对象
            console.log("toRaw(foo):", isProxy(message));
        })
        const clickEvent = () => {
            foo.g = 0
            foo2.f = 3
            console.log(message.value);
        }
        const state = reactive({ count: 1, title: 'titles' })
        watch( // 侦听多个源
            () => [state.count, state.title],
            ([n, o], [nn, oo]) => {

            }
        )
        console.log("getCurrentInstance::", getCurrentInstance());

        return { clickEvent, message, foo, foo2 }
    },
    data() {
        return {
            dd: ''
        }
    }
})
</script>

<style scoped>
</style>