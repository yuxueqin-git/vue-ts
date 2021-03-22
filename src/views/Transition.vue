<template>
    <div>{{shallow.greet}}</div>
    <div>{{stateRef}}</div>
    <button @click="update">修改</button>

</template>

<script lang="ts">
import { defineComponent, reactive, customRef, unref, ref, shallowRef, watchEffect, triggerRef, toRef } from 'vue'

function useDebouncedRef(value, delay = 200) {
    let timeout
    return customRef((track, trigger) => {
        return {
            get() {
                track()
                return value
            },
            set(newValue) {
                clearTimeout(timeout)
                timeout = setTimeout(() => {
                    value = newValue
                    trigger()
                }, delay)
            }
        }
    })
}
export default defineComponent({
    setup() {
        const state = reactive({
            foo: 1,
            bar: 2
        })
        const stateRef = toRef(state, "foo")

        const shallow = shallowRef({
            greet: 'Hello, world'
        })
        // 第一次运行时记录一次 "Hello, world"
        watchEffect(() => {
            console.log('watchEffect::', shallow.value.greet)
        })
        const update = () => {
            shallow.value.greet = 'Hello, universe';
            state.foo = 9
            stateRef.value = 6
            console.log("update::", shallow.value)
        }

        triggerRef(shallow); // shallow.value.greet = 'Hello, universe';针对这一句实现数据的更新

        return {
            shallow, update, state, stateRef,
            text: useDebouncedRef('hello')
        }
    }
})
</script>

<style scoped>
button {
    padding: 10px;
    background-color: red;
    color: white;
    border-radius: 4px;
    text-decoration: none;
    cursor: pointer;
    border: none;
}
button:focus {
    outline: 1px dashed #fff;
    outline-offset: -3px;
}
.shake {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
}
@keyframes shake {
    10%,
    90% {
        transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
        transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
        transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
        transform: translate3d(4px, 0, 0);
    }
}
</style>