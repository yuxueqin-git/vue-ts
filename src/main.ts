import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App).use(store).use(router)
app.config.globalProperties.foo = 'dddbar'
app.mount('#app')


// createApp(App).use(store).use(router).directive('focus', {
//     mounted(el) {
//         el.focus()
//     }
// }).mount('#app')
// 处理组件 渲染方法 执行期间 以及 侦听器 	抛出的未捕获错误
// app.config.errorHandler = (err, vm, inform) => {
//     console.log('进来啦~');
//     console.log("err:", err);
//     console.log("vm:", vm);
//     console.log("inform:", inform);
//     // 把错误外抛到控制台
//     // console.error(err);
// }
// app.mount('#app')