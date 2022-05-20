<template>
  <div class="flex justify-center">
    <WordleViewer :mainWord="getMainWord()" />
    <p class="text-slate-50"></p>
  </div>

</template>

<script setup lang ="ts">
import {ref, onMounted, defineComponent} from 'vue'
import { onBeforeRouteUpdate } from 'vue-router';
import ListOfWords from '../services/SMainWordle'
import WordleViewer from './WordleViewer.vue'
import { useLoggedInUserStore } from '../store/store';

defineComponent({
  WordleViewer,
})

var mainWord: string

function getMainWord(): string {
  var list = new ListOfWords()
  return list.pullMainWord();
}
</script>

<style>

</style>