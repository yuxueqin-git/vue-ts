<template>
    <div>
        <ul class="ul">
            <li
                style="float:left;margin:0px 10px;cursor:pointer;"
                v-for="(item,index) in list"
                :key="index"
                @click="clickTab(item)"
            >
                {{item}}
            </li>
        </ul>

    </div>
    <br>
    <keep-alive>
        <component :is="tabComputed"></component>
    </keep-alive>
</template>

<script lang="ts">
import UseComponentA from '../components/UseComponentA.vue'
import UseComponentB from '../components/UseComponentB.vue'
import { computed, defineComponent, reactive, ref } from 'vue'
export default defineComponent({
    components: {
        UseComponentA,
        UseComponentB
    },
    setup() {
        const currentTab = ref('Component-A')
        const list = reactive(['Component-A', 'Component-B'])
        const clickTab = (val) => {
            currentTab.value = val
            console.log(val);

        }
        const tabComputed = computed(() => 'use-' + (currentTab.value.toLowerCase()))
        console.log("tabComputed:", tabComputed.value);

        return {
            list,
            clickTab,
            tabComputed
        }
    }
})
</script>

<style scoped>
.ul {
    /* position: absolute; */
}
</style>