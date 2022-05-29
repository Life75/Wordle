<template>
  <div>
    <div id="letter">
      <div class="flex">
        <div class="flex">
          <!-- Start of component -->
          <div :class="classDiv">
            <div id="header" class="flex items-center">
              <div
                class="text-xl border-orange-400 focus:border-cyan-300"
                @focusout="lockOut()"
              >
                <input
                  :class="classInput"
                  cursor
                  maxlength="1"
                  :disabled="lockedOut"
                  v-model="letter"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- End of component -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, ref } from "@vue/reactivity";
import { watch } from "vue";
import { defineComponent } from "vue-demi";

export default defineComponent({
  name: "Letter",
  props: ["mainWord", "index", "clearContents"],
  emits:  ['reciever', 'currentIndex', 'letterGiven'],
  setup(props, {emit}) {
    var letter = ref("");
    var lockedOut = false;
    const defaultClassInput = "ml-1 mb-2 border-none outline-none border-2 w-4";
    const defaultClassDiv =
      "max-w-sm bg-white border-2 border-gray-300 p-2 rounded-md tracking-wide shadow-lg";

    var classInput = ref(defaultClassInput);
    var classDiv = ref(defaultClassDiv);
    
    function lockOut() {
      if (letter.value != "") {
        lockedOut = true; 
        //TODO eval check on given word to see how close it is to the WoTD
        _evalInput(letter.value.toLowerCase());
        //TODO check if this is the last letter in the index, if so create a animation good job or something next to the div to show up
      }
    }



    function _evalInput(letter: string) {
      if (props.mainWord[props.index] == letter) {
        
        emit('reciever', true)
        
        //classInput.value = `${defaultClassInput} bg-lime-400`;
        //classDiv.value = `${defaultClassDiv} bg-lime-400`;
      } else {
        if (props.mainWord.includes(letter)) {
          //classInput.value = `${defaultClassInput} bg-yellow-300`;
          //classDiv.value = `${defaultClassDiv} bg-yellow-300`;
        } else {
         // classInput.value = `${defaultClassInput} bg-red-400`;
         // classDiv.value = `${defaultClassDiv} bg-red-400`;
        }
        emit('reciever', false)
      }
      emit('currentIndex', props.index)
      emit('letterGiven', letter)
    }

    watch(ref(props.clearContents), (newValue, oldValue) => {
      console.log(newValue)
    })

    return {
      classDiv,
      classInput,
      lockOut,
      lockedOut,
      letter,
      eval,
      correctStyle: "",
      defaultStyle:
        "ml-1 mb-2 border-none outline-none border-2 w-4 caret-white",
    };
  },
});
</script>

<style></style>
