//pulls in data from function and identifies what the main word is
import wordList from '../services/WordOfTheDayService'
export default function pullMainWord() {
    //parse into an array 
    const wordArr = parseIntoWords(wordList.toString())
    findRandomWord(wordArr)
}

function parseIntoWords(wordList: string) {

    //shave off ends 
    var wordArr = wordList.split(" ");
    for(var i = 0; i < 7; i++) wordArr.shift()
    wordArr.pop()

    return wordArr;
}


function findRandomWord(wordArr: string[]) {
    var randomInt = Math.floor(Math.random() * wordArr.length)
    
    console.log(wordArr[randomInt])
}

//last one is the word to try and achieve 
function fiveWords() {

}