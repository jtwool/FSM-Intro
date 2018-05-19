min = 0
max = 50
target = 0
cur = 0
guesses = 0

setTarget = function(){
  target = parseInt(document.getElementById("target").value)
  document.getElementById("myNum").innerText = target
  cur = Math.floor(.5*(max-min) + min)
  document.getElementById("StartBox").hidden =  true
  document.getElementById("CurrentGuess").innerText = cur
  guesses += 1
  document.getElementById("NumGuesses").innerText = guesses
}

guessIsLow = function(){
  max = cur
  cur = Math.floor(.5*(max-min) + min) 
  document.getElementById("CurrentGuess").innerText = cur
  guesses += 1
  document.getElementById("NumGuesses").innerText = guesses
  checkForWin()
}

guessIsHigh = function(){
  min = cur
  cur = Math.floor(.5*(max-min) + min) 
  document.getElementById("CurrentGuess").innerText = cur
  guesses += 1
  document.getElementById("NumGuesses").innerText = guesses
  checkForWin()
}

checkForWin = function(){
  if (cur == target){
  alert("The computer guessed your number in "+guesses+" guesses!")
  alert("Enter a new number to play again.")
  document.getElementById("StartBox").hidden =  false
  min = 0
  max = 50
  target = 0
  cur = 0
  guesses = 0  
  }
}
