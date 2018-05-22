letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
             "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
             
toRot13 = function(word){
  new_word = []
  for (var i = 0; i < word.length; i++) {
    char = word[i].toUpperCase()
    rot13_char = letters.indexOf(char) + 13
    if (rot13_char > 26) {
      rot13_char = rot13_char-26
    }
    new_word.push( letters[rot13_char] ) 
  }
return(new_word.join(""))}

fromRot13 = function(word){
  new_word = []
  for (var i = 0; i < word.length; i++) {
    char = word[i].toUpperCase()
    rot13_char = letters.indexOf(char)-13
    if (rot13_char < 0) {
      rot13_char = rot13_char+26
    }
    new_word.push( letters[rot13_char] ) 
  }
return(new_word.join(""))}

Encrypt = function(){
  msg = document.getElementById("VisibleMessage").value
  words = msg.split(" ")
  rot13Words = words.map(toRot13)
  encrypted_message = rot13Words.join(" ")
  document.getElementById("SecretMessage").value = encrypted_message
}

Decrypt = function(){
  secret = document.getElementById("SecretMessage").value
  words = secret.split(" ")
  original_words = words.map(fromRot13)
  original_msg = original_words.join(" ")
  document.getElementById("VisibleMessage").value = original_msg 
}
