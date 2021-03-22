<template>
    <p>
        <child-instance :ss="'ss'"></child-instance>
    </p>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ChildInstance from '../components/ChildInstance.vue'
export default defineComponent({
    components: {
        ChildInstance
    },
    setup() {
        const message = ref('i am parentinstance!')

        return {
            message
        }
    },
    data() {
        return {
            name: ''
        }
    },
    mounted() {

    }
})
</script>

<style scoped>
</style>