<template>
    <div>
        <div >
            <Wordle/>
            {{props.mainWord}}
        </div>
    </div>
</template>

<script setup lang="ts">
import Wordle from "./wordle.vue";

const props = defineProps(['mainWord']) 

</script>

<style>

</style>