const words = [
"Backend Developer",
"Python Automation Engineer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement =
document.getElementById("typing");

function typeEffect(){

const currentWord =
words[wordIndex];

if(!deleting){

typingElement.textContent =
currentWord.substring(
0,
charIndex + 1
);

charIndex++;

if(charIndex === currentWord.length){

deleting = true;

setTimeout(
typeEffect,
1800
);

return;
}

}else{

typingElement.textContent =
currentWord.substring(
0,
charIndex - 1
);

charIndex--;

if(charIndex === 0){

deleting = false;

wordIndex =
(wordIndex + 1)
% words.length;
}
}

setTimeout(
typeEffect,
deleting ? 50 : 90
);
}

typeEffect();

/* Modal */

const modal =
document.getElementById(
"contactModal"
);

document
.getElementById("openModal")
.addEventListener("click",()=>{

modal.classList.add("active");

});

document
.getElementById("closeModal")
.addEventListener("click",()=>{

modal.classList.remove("active");

});

window.addEventListener("click",(e)=>{

if(e.target === modal){

modal.classList.remove(
"active"
);

}

});

/* Phone */

function showPhone(){

document
.getElementById("phoneText")
.textContent =
"+98 930 660 2877";
}

function copyPhone(){

navigator.clipboard.writeText(
"+989306602877"
);
}

function copyTelegram(){

navigator.clipboard.writeText(
"@i3sadra"
);
}