<template>
    <div>
        <div class="wrapper">
            <div
                v-for="(item,index) in 3"
                :key="index"
                @click="show(index+1)"
            >{{index}}</div>
        </div>
        <div v-if="which === 1">222</div>
        <div v-else-if="which === 2">333</div>
        <div v-else>444</div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        const which = ref(1)
        const show = (val) => {
            console.log(val);

            which.value = val

        }
        return { which, show }
    }
})
</script>

<style scoped>
.wrapper {
    border: 1px solid red;
    overflow-y: auto;
}
</style>