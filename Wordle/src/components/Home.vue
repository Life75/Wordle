<template>
  <h1 class=""></h1>
<button class="bg-white" @click="test()">Click Me!</button>
</template>

<script setup lang ="ts">
import {ref, onMounted} from 'vue'
import wordList from '../services/WordOfTheDayService'

onMounted(() => {
    console.log(wordList)
})


function test() {

}
</script>

<style>

</style>