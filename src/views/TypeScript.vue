<template>
    <div>{{ss()}}
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        // let tom: [string, number] = ['Tom', 25];




        return {
            ss: (val: string): string => {
                return 'dd'
            }
        }
    }
})
</script>

<style scoped>
</style>