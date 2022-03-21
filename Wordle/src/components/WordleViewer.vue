<template>
    <div>
        <div class="flex justify-center m-3">
            <Wordle :word="props.mainWord"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import Wordle from "./Wordle.vue";

const props = defineProps(['mainWord']) 

</script>

<style>

</style>