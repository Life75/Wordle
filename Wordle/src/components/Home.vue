<template>
  <div class="flex justify-center">
    <WordleViewer :mainWord="getMainWord()" />
    <p class="text-slate-50"></p>
  </div>

</template>

<script setup lang ="ts">
import {ref, onMounted, defineComponent} from 'vue'
import { onBeforeRouteUpdate } from 'vue-router';
import pullMainWord from '../services/SMainWordle'
import Testing from '../services/testing';
import WordleViewer from './WordleViewer.vue'
import { useLoggedInUserStore } from '../store/store';



var mainWord: string

function getMainWord(): string {
  return pullMainWord();
}
</script>

<style>

</style>