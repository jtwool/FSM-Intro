scenes = [
// SCENE 0
"You accept the challenge to combat the dragon. Nervous about how you, just a single person, can defeat such an incredible beast, you seek the advice of your mother. She says to you \"You are stronger in many ways than you even know. But strength is not the only way to solve problems. The townsfolk chose you for a reason. You'll know how to defeat the dragon.\" After thinking about you, you decide you have two options: fight the dragon with sword and shield, or sneak into the dragon's lair and pacify it quietly.",
// SCENE 1
"You deny the challenge. The townsfolk are disappointed, but they select a different champion: your rival, Gary. The next time the dragon comes, everyone is confident that Gary will save them. The dragon circles overhead, breathing fire and menacing the villagers. Finally, the dragon lands. Gary grabs an axe and rushes into battle with the dragon. But before Gary can reach the beast, the dragon pushs a small puff of flame from its teeth. The ball of fire envelops Gary and when it is gone, so is Gary. You feel confident in your decision not to have accepted the mantel as champion. The dragon still wants its tribute, however, and instead of the usuall offering, the townsfolk offer the beast you!! Your mother and father burst into tears, but their is nothing they can do. The dragon snatches you in its jaws and swallows you whole. <strong>THE END.</strong>",
// SCENE 2
"You've decided to fight the dragon. You visit the village blacksmith and get as fine a sword as he can craft and a sturdy shield to match. You march to the dragon's lair and enter through the most obvious route. You make no pretense of being quiet. You bash your sword on your shield and you sing songs of victory until you enter into the large antechamber where the dragon rests. The beast wakes upon your entrance. Noticing your slight advantage, you rush forward. The dragon shouts fire towards you, but you dive out of the way, hiding behind a pile of gold coins. The dragon begins to rise into the air. You notice an opening! You run up the pile of gold and jump towards the dragon, trusting your sword into its soft underbelly! The dragon falls to the ground and you with it. The two of you grapple for a moment, but your strike was true. The dragon lies still. You gather as much gold as you can and return to the village a hero. The townsfolk find you a magnificant crown amongst the dragon's treasure and annoint you as their leader. <strong>THE END.</strong>",
// SCENE 3
"You've decided to fight the dragon. You visit the village blacksmith and get as fine a sword as he can craft and a sturdy shield to match. You march to the dragon's lair and enter through the most obvious route. You make no pretense of being quiet. You bash your sword on your shield and you sing songs of victory until you enter into the large antechamber where the dragon rests. The beast wakes upon your entrance. Noticing your slight advantage, you rush forward. The dragon opens its wings quickly and the gust of wind knocks you to your back. You lie their helpless as the dragon raises in the air. As fire covers you, you feel your mother must have intended something else. <strong>THE END.</strong>",
// SCENE 4
"You've decided to sneak into the dragon's lair and deal with it from the shadows. You hike to the dragon's lair and enter through a hidden side path. You crawl through winding caverns, making extra effert to stay quiet. It pays off! When you arrive, the dragon is asleep. You compose yourself and begin your approach. You walk right up to the dragon long mouth. From your pocket you take a bag filled with a poisonous powder. You hold the bag up next to the dragon's nostrils. You can hear the dragon's breathing slow as it sinks deeper and deeper into a slumber. Eventually, the dragon stops breathing all together. You draw the bag shut and put it back in your pockets, before taking a few choice pieces of treasure and returning to the village. The townsfolk greet you upon your return like the hero you are! They celebrate you for 14 days and 14 nights. At the end of the festival, you are annointed champion for life, and your family lives well off the dragon's treasure for the rest of their days. <strong>THE END.</strong>",
//SCENE 5
"You've decided to sneak into the dragon's lair and deal with it from the shadows. You hike to the dragon's lair and enter through a hidden side path. You crawl through winding caverns, making extra effert to stay quiet. It pays off! When you arrive, the dragon is asleep. You compose yourself and begin your approach. You walk right up to the dragon long mouth. From your pocket you take a bag filled with a poisonous powder. As you go to open the powder, you accidentally take a deep breath of the poison yourself. You begin to feel very tired and stumble to your knee. The dragon's eyes open wide on the sound of your knee against the gold coins that cover the lair. You try to rise and run or fight, but you cannot. You fall to the ground. Your eyes shut slowly. The blurry sight of the dragon is the last thing you see. <strong>THE END.</strong>"]

scene = null
choice1 = "None"
choice2 = "None"

choice1 = function(){
  if (scene==null){
    document.getElementById("story").innerText = scenes[0]
    document.getElementById("option1").value = "Fight the dragon"
    document.getElementById("option2").value = "Sneak into the dragon's lair"
    scene = 0
  }
  else if (scene==0){
    document.getElementById("story").innerText = scenes[2]
    document.getElementById("option1").hidden = true
    document.getElementById("option2").hidden = true
  }
}

choice2 = function(){
  if (scene==null){
    document.getElementById("story").innerText = scenes[1]
    document.getElementById("option1").hidden = true
    document.getElementById("option2").hidden = true
  }
  else if (scene==0){
    document.getElementById("story").innerText = scenes[4]
    document.getElementById("option1").hidden = true
    document.getElementById("option2").hidden = true
  }
}
