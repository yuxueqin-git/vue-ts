<template>
    <div>我是组件 A</div>
    <hr>
    <slot-b @clicks="clicks">
        <!-- 插槽的三种写法 -->
        <!-- <template v-slot:first>
            <h1>Here might be a page title</h1>
        </template>
        <template #three>
            <h1>插入的内容a</h1>
        </template>
        <p>插入的内容b</p>
        <p slot="second">插入的内容c</p> -->
        <!-- <template v-slot='props'> -->
        <!-- <template v-slot='{ item:todo }'> -->
        <!-- <template v-slot='{ item,items }'> -->
        <template v-slot="{ item = 'Placeholder' }">
            <div>
                {{item }}
                <!-- {{items }} -->
            </div>
        </template>
        <!-- <template v-slot:default="slotProps">
            <i class="fas fa-check"></i>
            <span class="green">{{ '--'+slotProps.item + '-parent'}}</span>
        </template> -->
    </slot-b>
</template>

<script lang="ts">
import SlotB from '../components/SlotB.vue'
import { defineComponent, ref, watch } from 'vue'
export default defineComponent({
    name: 'SlotA',
    components: {
        SlotB
    },
    setup() {
        const clicks = () => {
            console.log('hello i am slotB!');
        }
        return { clicks }
    }

})
</script>

<style>
</style>