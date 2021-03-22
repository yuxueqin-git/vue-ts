<template>
    <div>
        <button @click="click">点击</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default defineComponent({
    setup() {
        const route = useRoute()
        // route.params.id = 'd001'
        const userData = ref()
        const fetchUser = (val: any): void => {
            console.log('fetchUser()');
        }
        const click = () => {
            // route.params.id = '0005'
            console.log('click::', route.params);

        }
        // fetch the user information when params change
        watch(
            () => route.params,
            async (newParams, oldParams) => {
                userData.value = await fetchUser(newParams.id)
                console.log(newParams.id);
                console.log(oldParams);
            },
            { immediate: true },
        )

        return { click }
    }
})
</script>

<style scoped>
</style>