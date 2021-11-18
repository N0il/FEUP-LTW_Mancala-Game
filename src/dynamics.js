// Toggle Chat, Rules and Score sections
var chat = document.getElementById("img-header-navbar-chat-icon");
chat.addEventListener("click", toggleChat);
				  
var rules = document.getElementById("img-header-navbar-rules-icon");
rules.addEventListener("click", toggleRules);
				  
var score = document.getElementById("img-header-navbar-score-icon");
score.addEventListener("click", toggleScore);

var isSectionOpen = [false, false, false];

function toggleIcon(index, imageElement, icon1, icon2) {
  if(isSectionOpen[index]) { 
		imageElement.src = icon1;
		isSectionOpen[index] = false;
	}
	else{ 
		imageElement.src = icon2;
		isSectionOpen[index] = true;
	}
}

function toggleVisibility(isOpen, primaryId, secondaryId, display1, display2) {
  var primaryElement = document.getElementById(primaryId);
  var secundayElement = document.getElementById(secondaryId);
  
  if(isOpen) {
    primaryElement.style.display = "none";
    secundayElement.style.display = display2;
  }
  else {
    primaryElement.style.display = display1;
    secundayElement.style.display = "none";
  }
}

function toggleChat(){
  toggleIcon(0, chat, "../res/chat_icon.png", "../res/chat_icon_active.png");
  toggleVisibility(isSectionOpen[0], "section-main-authentication", "section-main-chat", "block", "block");
  toggleSignIn();
}
				  
function toggleRules() {
  toggleIcon(1, rules, "../res/rules_icon.png", "../res/rules_icon_active.png");
  toggleVisibility(isSectionOpen[1], "section-main-game", "section-main-rules", "block", "block");
}

function toggleScore() {
  toggleIcon(2, score, "../res/score_icon.png", "../res/score_icon_active.png");
  toggleVisibility(isSectionOpen[2], "section-main-configurations", "section-main-score", "block", "block");
}

// Toggle Sign In and Sign Up sections
var signUp = document.getElementById("h3-login-titles-signup--in");
signUp.addEventListener("click", toggleSignUp);

var signIn = document.getElementById("h3-login-titles-signin--up");
signIn.addEventListener("click", toggleSignIn);

function toggleSignUp(){
  toggleVisibility(true, "form-authentication-login", "form-authentication-signup", "block", "block");
  document.getElementById("section-main-commands").style.display = "none";
}

function toggleSignIn(){
  toggleVisibility(false, "form-authentication-login", "form-authentication-signup", "block", "block");
  document.getElementById("section-main-commands").style.display = "flex";
}

// Toggle Game modes in Configurations
var modes = document.getElementsByClassName("radio-settings-info--mode");

modes[0].addEventListener("click", localConfigs);
modes[1].addEventListener("click", onlineConfigs);
modes[2].addEventListener("click", computerConfigs);

function localConfigs(){
  document.getElementById("d-settings-mode--local").style.display = "block";
  document.getElementById("d-settings-mode--online").style.display = "none";
  document.getElementById("d-settings-mode--computer").style.display = "none";
}

function onlineConfigs(){
  document.getElementById("d-settings-mode--local").style.display = "none";
  document.getElementById("d-settings-mode--online").style.display = "block";
  document.getElementById("d-settings-mode--computer").style.display = "none";
}

function computerConfigs(){
  document.getElementById("d-settings-mode--local").style.display = "none";
  document.getElementById("d-settings-mode--online").style.display = "none";
  document.getElementById("d-settings-mode--computer").style.display = "block";
}

// Game Loading Screen /*UNCOMMENT*/
document.getElementById("d-game-area-background").style.display = "grid";  /* COMMENT HERE */
/*
setTimeout(function(){
  document.getElementById("d-load-game-area").style.display = "none";
  document.getElementById("d-game-area-gameplay").style.display = "grid";
  document.getElementById("d-game-area-background").style.display = "grid";
},2900);
*/

// Cavities and Seeds Settings
var configsButton = document.getElementById("button-settings-info--config");
configsButton.addEventListener("click", gameplayAreaConfigs);

function gameplayAreaConfigs(){
  cavitiesConfig();
  seedsConfig();
}

function cavitiesConfig(){
  var backgroundCavities = document.getElementsByClassName("d-game-background-cavity");
  var gameplayCavities = document.getElementsByClassName("d-gameplay-cavity");

  while(backgroundCavities[0]){
    backgroundCavities[0].remove();
    gameplayCavities[0].remove();
  }

  var quantities = document.getElementsByClassName("input-settings-info--quantities");
  var nCavities = quantities[0].value;

  for(i = 0; i < nCavities; i++){
    //Game Background
    var cavitie = document.createElement("div");
    cavitie.classList.add("d-game-background-cavity");
    document.getElementById("d-game-background-cavities-p1").appendChild(cavitie);

    var cavitie2 = document.createElement("div");
    cavitie2.classList.add("d-game-background-cavity");
    document.getElementById("d-game-background-cavities-p2").appendChild(cavitie2);

    //Gameplay Area (Top of background)
    var cavitieTop = document.createElement("div");
    cavitieTop.classList.add("d-gameplay-cavity");
    document.getElementById("d-gameplay-cavities-p1").appendChild(cavitieTop);

    var cavitieTop2 = document.createElement("div");
    cavitieTop2.classList.add("d-gameplay-cavity");
    document.getElementById("d-gameplay-cavities-p2").appendChild(cavitieTop2);
  }
}

var seedRes = ["../res/seeds/seed_red.png", "../res/seeds/seed_green.png", "../res/seeds/seed_yellow.png", "../res/seeds/seed_blue.png"];
var seedResAlt = ["../res/seeds/seed_red_alt.png", "../res/seeds/seed_green_alt.png", "../res/seeds/seed_yellow_alt.png", "../res/seeds/seed_blue_alt.png"];

function randomSeedResource(){
  //returns a random integer from 0 to 3:
  var randNum = Math.ceil(Math.random() * 4) - 1;

  //returns a random integer from 0 to 1:
  var altShape = Math.ceil(Math.random() * 2) - 1;

  if(altShape){
    return seedResAlt[randNum];
  }else{
    return seedRes[randNum];
  }
}

function randSeedPositionTop(){
  var randPos = Math.random() * 65 + 10;
  return randPos + "%";
}

function randSeedPositionLeft(){
  var randPos = Math.random() * 55 + 10;
  return randPos + "%";
}

function seedsConfig(){
  var quantities = document.getElementsByClassName("input-settings-info--quantities");
  var cavs = document.getElementsByClassName("d-gameplay-cavity");

  var seeds = document.getElementsByClassName("img-seed");
  var seedQuantities = document.getElementsByClassName("p-seed-quantitie");

  //removing all seeds
  while(seeds[0]){
    seeds[0].remove();
  }

  //removing all seed quantities
  while(seedQuantities[0]){
    seedQuantities[0].remove();
  }

  var nCavities = quantities[0].value;
  var nSeeds = quantities[1].value;

  for(i = 0; i < nCavities * 2; i++){
    //adding seeds
    for(j = 0; j < nSeeds; j++){
      var seed = document.createElement("img");
      seed.classList.add("img-seed");
      seed.style.top =  randSeedPositionTop();
      seed.style.left = randSeedPositionLeft();
      seed.src = randomSeedResource();
      cavs[i].appendChild(seed);
    }

    //adding seed quantities (hover): one to each cavity 
    var seedQuan = document.createElement("p");
    seedQuan.classList.add("p-seed-quantitie");
    seedQuan.innerHTML += cavs[i].childElementCount;
    cavs[i].appendChild(seedQuan);
  }

  //adding seed quantities (hover): one to each storage
  for(i = 0; i < 2; i++){
    var storages = document.getElementsByClassName("d-gameplay-storage");
    var seedStorageQuantities = document.createElement("p");
    seedStorageQuantities.classList.add("p-seed-quantitie");
    seedStorageQuantities.innerHTML += storages[i].childElementCount;
    storages[i].appendChild(seedStorageQuantities);
  }
}

// Reset Cavities and Seeds
var resetElement = document.getElementById("button-settings-info--reset");
resetElement.addEventListener("click", reset);

function reset(){
  var quantities = document.getElementsByClassName("input-settings-info--quantities");

  quantities[0].value = 6;
  quantities[1].value = 5;

  gameplayAreaConfigs();
}

//TODO IMPLEMENTATION OF MVC? OR STATE PATTERN? or BOTH?
/*
class Cavity {
  constructor() {}
}

class Storage{
  constructor() {}
}

class Seed{
  constructor() {}
}

class Player{
  constructor() {}
}

class Guest extends Player{
}

class Auth extends Player{
}

*/