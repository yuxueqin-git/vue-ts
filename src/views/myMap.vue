<template>
    <h2> myMap页面::</h2>
    <div>userLocation:: {{userLocation}}</div>
    <div>userGeolocation:: {{userGeolocation}}</div>
    <button @click="updates('子组件传来的location') ">子-修改</button>
    <button @click="updatess">d</button>
    <div>ss:{{ss}}</div>
    <div>age:{{age}}</div>
    <button @click="one($event), two($event)">多处理事件</button>

</template>

<script lang="ts">
import { defineComponent, inject, onMounted, watch, ref, computed } from 'vue'
export default defineComponent({
    props: {
        postTitle: String,
        // 类型检查
        height: Number,
        // 类型检查 + 其他验证
        age: {
            type: Number,
            default: 0,
            required: true,
            // validator: value => {
            //     return value >= 0
            // }
        }
    },
    setup(props) {
        // console.log(props.postTitle);
        const ss = ref('')
        const userLocation = ref(inject('locations'));
        const userGeolocation = inject('geolocations');
        const updates = inject('updates');

        onMounted(() => {
            console.log('onMounted1:', userLocation);
            console.log('onMounted2:', userGeolocation);
        })
        const updatess = () => {
            userLocation.value = '3433'
        }
        // const one = (val) => {
        //     console.log('one:', val);
        // }
        // const two = (val) => {
        //     console.log('two:', val);
        // }
        // // watch 监听
        // let wat = null
        // wat = watch(userLocation, (ne, ol) => {
        //     console.log('userLocation:', ne, ol);
        //     if (wat) {
        //         console.log(333);
        //         wat() // 取消侦听的函数 ,即父组件的信息修改了，但子组件不在监听了
        // //     }
        // // },
        //     { immediate: true })
        return {
            userLocation,
            userGeolocation,
            updates,
            updatess,
            ss,
            // one,
            // two
        }
    }
})
</script>

<style>
</style>