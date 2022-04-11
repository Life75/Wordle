<template>
    <div>
        <div class="flex  m-3">
            <Wordle 
            :word="props.mainWord"/>
        
        </div>
        
            <Wordle
            :word="props.mainWord"/>

    </div>
</template>

<script setup lang="ts">
import Wordle from "./Wordle.vue";

const props = defineProps(['mainWord']) 

</script>

<style>

</style>