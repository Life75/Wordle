<template>
<div v-for="(letter, index) in word" :key="index" class="flex">
    <Letter :mainWord="$props.word" :index="index" @reciever="recieverCheck"/>
</div>


</template>

<script lang="ts">
import { defineComponent, Ref, ref, watch } from "vue"
import Letter from "./Letter.vue"
export default defineComponent({
    name:'Wordle', 
    components: {Letter},
    props: {
        word: String
    },
    setup(props) {
        
        var wordle = ref<Boolean[]>([])

        function evaluate() {
        
        if(!wordle.value.includes(false)) {
            console.log('congrats') //TODO bubble up to let the viewer know and cancel off inputs with v-show
        }
        else console.log('sorry')
            
        }   

        watch(wordle, () => {
            if(wordle.value.length == props.word?.length) evaluate()
        },
        {deep: true})
        return {
            wordle
        }
    },
    methods: {
        recieverCheck(reciever: boolean): void {
            this.wordle.push(reciever);
        }
    }
})



</script>

<style>
</style>