<template>
    <div>
        <div class="flex  m-3">
            <Wordle 
            :word="mainWord"/>
        </div>
        <div class="flex  m-3">
            <Wordle 
            :word="mainWord"/>
        </div>
                <div class="flex  m-3">
            <Wordle 
            :word="mainWord"/>
        </div>
                <div class="flex  m-3">
            <Wordle 
            :word="mainWord"/>
        </div>
                <div class="flex  m-3">
            <Wordle 
            :word="mainWord"/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";
import Wordle from "./Wordle.vue";

export default defineComponent ({
    name: 'WordleViewer',
    components: {
        Wordle
    },
    props: {
        mainWord: {type: String, default: 'default' }
    },
})
</script>

<style>
    
</style>