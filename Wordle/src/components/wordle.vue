<template>
<div v-for="(letter, index) in word" :key="index" class="flex">
    <Letter :mainWord="$props.word" :index="index"/>
</div>


</template>

<script lang="ts">
import { defineComponent } from "vue"
import Letter from "./Letter.vue"
export default defineComponent({
    name:'Wordle', 
    components: {Letter},
    props: {
        word: String
    },
})



</script>

<style>
</style>