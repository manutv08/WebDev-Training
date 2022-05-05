function findIndex(sentence, letter) {
    document.write("Sentence:",sentence)
    document.write("<br>")
    document.write("letter: ", letter)
    document.write("<br>")
    document.write("The letter is found at following indices:  ")
    for (let index = 0; index < sentence.length; index++) {
        let word = sentence.charAt(index);
        if(word === letter){
            document.write(index, " ")
        }
        
    }
}
function reverser(sentence) {
    document.write("<br><br><br>")
    document.write("<p>Reverser</p>")
    document.write("Given Sentence:",sentence)
    let words = sentence.split(" ")
    // document.write(words[(words.length)-1])
    document.write("<br>Reversed sentence: ")
    for (let index = (words.length)-1; index >= 0; index--) {
        document.write(" ",words[index])
        
    }
}
findIndex("javascript program","r")
reverser("my name is manu")