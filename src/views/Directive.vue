<template>
    <div> directive 子定义指令 </div>
    <div id="focus">
        <!-- binding.arg 为 foo -->
        <!-- binding.value 为 ddd -->
        <input
            v-focus:foo="'ddd'"
            v-model="pingPadding"
        />
    </div>
    <!-- <input
        type="range"
        min="0"
        max="500"
    > -->
    <p>{{pingPadding}}</p>
</template>

<script lang='ts'>
import { defineComponent, createApp, onMounted, ref } from 'vue'
import myMap from './myMap.vue';
export default defineComponent({
    components: { myMap },
    setup() {
        const direction = ref('right');
        const pingPadding = ref('');
        return {
            direction,
            pingPadding,
        }
    },
    directives: {
        focus: {
            // 自定义指令是具有一组生命周期的钩子
            mounted(el, binding) {
                console.log(binding);
                el.focus()
            }
        },
        // pin: {
        //     updated(el, binding) {
        //         console.log(binding);

        //         const s = binding.arg || 'top'
        //         el.style[s] = binding.value + 'px'
        //     }
        // }
    }
})
</script>

<style>
</style>