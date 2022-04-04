<template>
<div>
    <div id="letter">
        <div class>
            <div class="min-h-screen flex justify-center items-center">
                <!-- Start of component -->
                <div
                    class="max-w-sm  bg-white border-2 border-gray-300 p-2 rounded-md tracking-wide shadow-lg" 
                >
                    <div id="header" class="flex items-center  ">
                        <div class="text-xl border-orange-400 focus:border-cyan-300" @focusout="lockOut()">
                            <input class=" ml-1 mb-2 border-none outline-none border-2 w-4 caret-white" cursor maxlength="1" :disabled="lockedOut" v-model="letter">
                        </div>
                    </div>
                </div>
            </div>
            <!-- End of component -->
        </div>
    </div>
</div>

</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity';


var letter = ref('')
var lockedOut = false;

function lockOut() {
    if(letter.value != '') {
        lockedOut = true;
    }
}



</script>

<style>

</style>