<template>
    <p>
        i am childinstance!
    </p>
    <div>{{$parent}}</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, getCurrentInstance, ref } from 'vue'

export default defineComponent({
    props: {
        ss: String
    },
    setup() {
        const { proxy } = getCurrentInstance()
        console.log(getCurrentInstance());
        console.log('route::', proxy.$parent.$route);
        console.log('router::', proxy.$parent.$router);
        const ctx = getCurrentInstance()

        const count = ref(4)
        onMounted(() => {
            console.log();

        })
        return {
            count
        }
    },
    data() {
        return {
            ddd: ''
        }
    },
    created() { },
    mounted() {
        console.log("$parent", this.$parent);
        console.log(this.$parent.message);
        console.log('$root::', this.$root);
        console.log('$options::', this.$options);
        console.log('$el::', this.$el);
        console.log('$data::', this.$data);
        console.log('$props::', this.$props);

    }
})
</script>

<style scoped>
</style>