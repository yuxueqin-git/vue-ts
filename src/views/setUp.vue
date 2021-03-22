<template>
    <button @click="location = '修改locations值' ">父-修改</button>
    <MyMap
        :post-title="'success'"
        :age="3"
    />
</template>

<script lang='ts'>
import MyMap from './myMap.vue'
import { defineComponent, onMounted, reactive, toRefs, ref, h, provide, readonly } from 'vue'
export default defineComponent({
    components: {
        MyMap
    },

    setup() {
        // 使用函数渲染
        // return () => h(
        //     'div',
        //     [readsNumber.value, book.title]
        // )
        // onMounted()接受一个回调函数
        // onMounted(() => {
        //     console.log('调用了onMounted()');
        // })

        // const location = ref('north pole')
        const location = ref('north pole')
        const geolocation = reactive({
            logitude: 90,
            latitude: 135
        })
        provide('locations', readonly(location))
        provide('geolocations', geolocation)
        const updateLocation = (val: string) => {
            location.value = val
            console.log(val);
        }
        provide('updates', updateLocation)
        return {
            location
        }
    },
})
</script>

<style>
</style>