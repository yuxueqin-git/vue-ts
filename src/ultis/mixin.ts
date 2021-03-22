
export const myMixin = {
    data() {
        return {
            message: 'i am message'
        }
    },
    methods: {
        hello() {
            console.log('hello from mixin');
        }
    }
};
// export const myMixinmyMixin: string = '33'
// defineComponent({
//     setup() {
//         const name = ref(20)
//         const n:string = 11
//         return {
//             name
//         }
//     }
// })