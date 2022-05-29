//pulls in data from function and identifies what the main word is
import wordList from '../services/WordOfTheDayService'

export default class ListOfWords {
    private wordArr : string[] = []
    pullMainWord(): string{
        //parse into an array 
        this.wordArr = [...this.parseIntoWords(wordList.toString())]
        //this is word of the day to try and acheive 
        return this.findRandomWord(this.wordArr)
    }
    
    parseIntoWords(wordList: string) {
    
        //shave off ends 
        var wordArr = wordList.split(" ");
        for(var i = 0; i < 7; i++) wordArr.shift()
        wordArr.pop()
    
        return wordArr;
    }
    
    
    findRandomWord(wordArr: string[]) {
        var randomInt = Math.floor(Math.random() * wordArr.length);
        
        console.log(wordArr[randomInt]);
        return wordArr[randomInt];
    }
    
    doesWordExist(word: string | undefined): boolean {
        
        //console.log('word exisiting ')
        this.wordArr = [...this.parseIntoWords(wordList.toString())]

        if(word)
        {   
           return this.wordArr.includes(word)
            

            
        }
        
        else return false 
    }
    

}



//last one is the word to try and achieve 
