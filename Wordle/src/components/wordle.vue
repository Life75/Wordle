<template>
  <div v-for="(letter, index) in word" :key="index" class="flex">
    <Letter
      :mainWord="$props.word"
      :index="index"
      @reciever="recieverCheck"
      :clearContents="clearContents"
      @contentCleared="clearContents"
      @letterGiven="letterCheck"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import Letter from "./Letter.vue";
import ListOfWords from "../services/SMainWordle";
export default defineComponent({
  name: "Wordle",
  components: { Letter },
  props: {
    word: String,
  },
  setup(props) {
    var listOfWords = new ListOfWords();
    var wordle = ref<Boolean[]>([]);
    var lettersGiven = ref("");
    var clearContents = ref(false);

    function evaluate() {
      //first check if this is a real word or not, then give eval

      if (listOfWords.doesWordExist(lettersGiven.value?.toString())) {
        //evaluate word and see if its the right word

        //TODO last was here working if word exists 
        console.log("word exists");
        if (!wordle.value.includes(false)) {
          console.log("congrats"); //TODO bubble up to let the viewer know and cancel off inputs with v-show
        } else console.log("sorry");
      } else {
        clearContents.value = true;
        console.log("clear now");
        //clear out contents from letters
      }
    }

    watch(
      wordle,
      (newValue, oldValue) => {
        console.log(wordle);
        if (wordle.value.length == props.word?.length) evaluate();
      },
      { deep: true }
    );
    return {
      lettersGiven,
      wordle,
      clearContents,
    };
  },
  methods: {
    recieverCheck(reciever: boolean): void {
      this.wordle.push(reciever);
    },
    letterCheck(value: string) {
      this.lettersGiven = this.lettersGiven.concat(value);
      console.log(this.lettersGiven);
    },
  },
});
</script>

<style></style>
