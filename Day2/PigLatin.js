toPigLatin = function(word){
  return( word.slice(1) + word[0].toLowerCase() + "ay" )
}

fromPigLatin = function(word){
 return word.slice(-3,-2) + word.slice(0,-3) 
}

Encrypt = function(){
  msg = document.getElementById("VisibleMessage").value;
  words = msg.split(" ")
  pigwords = words.map(toPigLatin)
  encrypted_message = pigwords.join(" ")
  document.getElementById("SecretMessage").value = encrypted_message
}

Decrypt = function(){
  secret = document.getElementById("SecretMessage").value;
  words = secret.split(" ")
  original_words = words.map(fromPigLatin)
  original_msg = original_words.join(" ")
  document.getElementById("VisibleMessage").value = original_msg 
}
