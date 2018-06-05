num_wrong = 0
guesses = ""
word = "apple"

reload_gallows = function(){
  srcstr = "images/hangman-"+num_wrong+".png"
  document.getElementById("gallows-img").src=srcstr
}

flip_letters = function(){
  clues = ""
  for (i=0;i<word.length;i++){
    // if letter is not guessed, show _
    if(guesses.indexOf(word[i])==-1){
      clues += "_ "
    }
    // if letter is guessed, show letter
    else {clues += word[i]+" "}
  }
  document.getElementById("secret-word").innerText = clues
  if (clues.indexOf("_")==-1){
     document.getElementById("you-win").hidden = false
  }
}

makeGuess = function(){
  next_guess = document.getElementById("guess-entry").value
  guesses += next_guess
  document.getElementById("guesses").innerText = guesses
  // if we guess wrong
  if (word.indexOf(next_guess)==-1){ 
    num_wrong += 1
    reload_gallows()
    if (num_wrong == word.length) {
      document.getElementById("you-lose").hidden = false
    }
  }
  // if we guess right
  else {
    flip_letters(next_guess)
  }
  document.getElementById("guess-entry").value = "" 
}

start_game = function(){
 word = random_word()
 guesses = ""
 num_wrong = 0
 document.getElementById("guesses").innerText = guesses
 document.getElementById("you-lose").hidden = true
 document.getElementById("you-win").hidden = true
 document.getElementById("trgt-word").innerText = word
 reload_gallows()
 flip_letters()
}
