<template>

<div v-for="(letter, index) in word" :key="index" class="flex">
    <Letter :mainWord="$props.word" :index="index" @reciever="recieverCheck" :clearContents="clearContents" @contentCleared="clearContents"/>

</div>


</template>

<script lang="ts">
import { defineComponent, Ref, ref, watch } from "vue"
import Letter from "./Letter.vue"
import ListOfWords from "../services/SMainWordle"
export default defineComponent({
    name:'Wordle', 
    components: {Letter},
    props: {
        word: String
    },
    setup(props) {
        var listOfWords = new ListOfWords()
        var wordle = ref<Boolean[]>([])
        var clearContents = ref(false)

        function evaluate() {
        //first check if this is a real word or not, then give eval
        if(listOfWords.doesWordExist(props.word)) {
            //evaluate word and see if its the right word 
            console.log('hey')
        }
        else {
            console.log('he')
            clearContents.value = true
            //clear out contents from letters 

        }
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
            wordle,
            clearContents
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