player_score = 0
pc_score = 0
player_throw = ""
pc_throw = ""

pc_pick = function(){
  x = Math.random()*3
  if (x < 1){
    pc_throw = "rock";
  }
  else if (x < 2) {
    pc_throw = "paper";
  }
  else { 
    pc_throw = "scissors";
  }
}

update_scores = function(){
   document.getElementById("yourscore").innerText = player_score
   document.getElementById("pcscore").innerText = pc_score
}

throw_base = function(){
  pc_pick()
  msg = "Player throws " + player_throw +" and PC throws " + pc_throw + "."
  if (player_throw == "rock") {
    if (pc_throw == "rock") {
      msg += " Its a tie..."
    }
    else if (pc_throw == "paper") {
      msg += " Paper covers rock!"
      pc_score += 1
    }
    else {
      msg += " Rock smashes scissors!"
      player_score += 1
    }
  }
  else if (player_throw == "scissors") {
    if (pc_throw == "rock") {
      msg += " Rock smashes scissors!"
      pc_score += 1
    }
    else if (pc_throw == "paper") {
      msg += " Scissors cut paper!"
      player_score += 1
    }
    else {
      msg += " It's a tie..."
    }
  }
  else {
    if (pc_throw == "rock") {
      msg += " Paper covers rock!"
      player_score += 1
    }
    else if (pc_throw == "paper") {
      msg += " It's a tie..."
    }
    else {
      msg += " Scissors cut paper!"
      pc_score += 1
    }
  }
  document.getElementById("play_by_play").innerText = msg
}

throw_rock = function(){
  player_throw = "rock"
  pc_pick()
  throw_base()
  update_scores()
}
throw_paper = function(){
  player_throw = "paper"
  pc_pick()
  throw_base()  
  update_scores()
}

throw_scissors = function(){
  player_throw = "scissors"
  pc_pick()
  throw_base()
  update_scores()
}

reset = function(){
  pc_score = 0
  player_score = 0
  update_scores()
  document.getElementById("play_by_play").innerText = "Game over. Let's play again."

}
