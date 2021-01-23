//Animation Script
//invisible(atribute) -> fadein(class) -> visible -> fadeout -> invisible

let intro = document.querySelector("#intro");
let base = document.querySelector("#base");

let buttons = document.querySelector("#buttons");
let hint = document.querySelector("#hint");
let tree = document.querySelector("#tree");
let banner = document.querySelector("#banner");

//
let spinblend = document.querySelector("#spinblend");
let spin = document.querySelector("#spin");
let group = document.querySelector("#group");
let mass = document.querySelector("#mass");
let detail = document.querySelector("#detail");
let charge = document.querySelector("#charge");
//

let bGroup = document.querySelector("#buttonGroup");
let bSpin = document.querySelector("#buttonSpin");
let bMass = document.querySelector("#buttonMass");
let bDetail = document.querySelector("#buttonDetail");
let bCharge = document.querySelector("#buttonCharge");

intro.style.opacity = "0";
base.style.opacity = "0";
group.style.opacity = "0";
buttons.style.opacity = "0";
hint.style.opacity = "0";

//button bindings
var vGroup = false;
var vSpin = false;
var vMass = false;
var vDetail = false;
var vCharge = false;

bGroup.onclick = function(){
    if(!vGroup){
        fadeIn(group)
    }
    else fadeOut(group);
    vGroup = !vGroup;
}
bSpin.onclick = function(){
    if(!vSpin){
        spin.style.opacity = "1"
        spinblend.style.opacity = "1"
    }
    else{
        spin.style.opacity = "0"
        spinblend.style.opacity = "0"
    }
    vSpin = !vSpin;
}
bMass.onclick = function(){
    if(!vMass){
        fadeIn(mass)
    }
    else fadeOut(mass);
    vMass = !vMass;
}
bDetail.onclick = function(){
    if(!vDetail){
        fadeIn(detail)
    }
    else fadeOut(detail);
    vDetail = !vDetail;
}
bCharge.onclick = function(){
    if(!vCharge){
        fadeIn(charge)
    }
    else fadeOut(charge);
    vCharge = !vCharge;
}


//animation
var animTime = 0;

intro.classList.add("introFade");

setTimeout(function(){
    intro.classList.remove("introFade");
    intro.classList.add("fadeOut");
    intro.style.opacity = "0"
}, 5000);
animTime += 5000;

animTime += 3000;
setTimeout(function(){
    fadeIn(base);
    fadeIn(buttons);
    fadeIn(hint);

}, animTime);


animTime += 4000;
setTimeout(function(){
    fadeIn(tree);
    fadeIn(banner);
}, animTime);



//animation functions
function fadeIn(element){
    element.classList.add("fadeIn");
    setTimeout(function(){
        element.classList.remove("fadeIn");
        element.style.opacity = "1";
    }, 3000);
}
function fadeOut(element){
    element.classList.add("fadeOut");
    setTimeout(function(){
        element.classList.remove("fadeOut");
        element.style.opacity = "0";
    }, 3000);
}