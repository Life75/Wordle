<template>
  <div>
    <WordleViewer :mainWord="getMainWord()" />
  </div>

</template>

<script setup lang ="ts">
import {ref, onMounted, defineComponent} from 'vue'
import pullMainWord from '../services/SMainWordle'
import WordleViewer from './WordleViewer.vue'


var mainWord: string
const test = ref(0);
onMounted(() => {
})

function getMainWord(): string {
  return pullMainWord();
}
</script>

<style>

</style>