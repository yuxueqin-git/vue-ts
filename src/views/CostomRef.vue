<template>
    <div>
        <p>{{obj}}</p>
        <button @click="inc">button</button>
    </div>
</template>

<script lang='ts'>
import { defineComponent, ref, watch, customRef, onMounted, getCurrentInstance } from 'vue'
import { RouteRecordRaw, useRoute, useRouter } from 'vue-router'
import Home from '../views/Home.vue'
// customRef用于 自定义ref
// 自定义 ref 需要提供参数传值
function myRef(value: any): any {
    // 自定义 ref 需要提供 customerRef 返回值
    // customer 需要提供一个函数作为参数
    // 该函数默认带参数 track 和 trigger ，都是方法。
    return customRef((track, trigger) => {
        return {
            // customer 需要提供一个对象 作为返回值
            // 该对象需要包含 get 和 set 方法。
            get() {
                // track 方法放在 get 中，用于提示这个数据是需要追踪变化的
                track();
                console.log('get', value);

                return value;
            },
            // set 传入一个值作为新值，通常用于取代 value
            set(newValue) {
                console.log('set', newValue);
                value = newValue;
                // 记得触发事件 trigger,告诉vue触发页面更新
                trigger();
            }
        }
    })
}


export default defineComponent({
    name: 'App',
    setup(prop, context) {
        // let obj = ref(18); // reactive({value: 18})
        // 应用上面的自定义 ref ，使用方案和之前的 ref 是类似的。
        const obj = myRef(123);
        function inc() {
            obj.value += 1;
        }
        const { proxy } = getCurrentInstance()
        const routeObj = {
            path: '/Home', // 这里要把父路由的路径也带上
            name: 'Home',
            meta: { title: '测试路由test', noCache: true },
            component: Home
        }
        onMounted(() => {
            console.log('$route::', proxy.$route);
            console.log('$router::', proxy.$router);
            console.log('$route::', proxy.$router.addRoute('Home', routeObj));
            console.log('$route::', proxy.$router.getRoutes());
            console.log('useRoute::', useRoute());
            console.log('useRouter::', useRouter());
        })
        return {
            obj,
            inc
        };
    }
})
</script>
