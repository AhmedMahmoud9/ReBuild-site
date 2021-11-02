
anime({
    targets: '.dashLine line',
    keyframes:[ 
      {translateY: -60},
      
      {translateY: 0},
    ],
    delay: function(el, i) { return i * 500; },
    duration:4000,
    easing: 'easeInOutExpo',

    loop:true
  });
anime({
    targets: '.dashLine ellipse',
    
    keyframes:[
      {translateY: -50},
      {translateY: -0},
    ],
    baseFrequency: 0,
    scale: 1,    
    delay: function(el, i) { return i * 500; },
    duration:4000,
    easing: 'easeInOutExpo',
    loop:true
  });
  
/************WhyUs Animtion *******/
let fillText = document.getElementById("fillTextAnim");
let boldText = document.getElementById("boldTextAnim");
  window.onscroll=function(){
    if(window.pageYOffset == 100 || window.pageYOffset < 150){
      anime({
        targets: '#fillTextAnim  path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 800,
        delay: function(el, i) { return i * 50 },
        direction: 'alternate',
        loop: false
      },
      );
  }
  else if(window.pageYOffset < 100){
    fillText.style.display = "hidden";
  }
  
  else{
    fillText.style.display = "block";
  }
}

anime({
  targets: '#rideText path',
  keyframes:[
    {translateX: -350},
    {translateX: 0},
  ],
  delay: anime.stagger(100, {start: 1000}),
  duration:4000,
  loop:true 
});
/*************text gif**************/
let textGif = document.getElementById("myText");
window.addEventListener("scroll", ()=>{
  let font = window.scrollY;
  textGif.style.backgroundSize = 400 + font + "px";


})  
/********ourTeam******* */
var imgHover = document.getElementsByClassName("blackImg");
var imgColor = document.getElementsByClassName("colorImg");

for(let i=0; i < imgHover.length; i++){
  console.log("hello");
  console.log(i)
    imgHover[i].addEventListener("mouseover",changeImg)
    function changeImg(){
      imgHover[i].style.display = "none"
      imgColor[i].style.display = "block"
  }
    imgColor[i].addEventListener("mouseout",backimg)
    function backimg(){
      imgColor[i].style.display = "none"
      imgHover[i].style.display = "block"
    
  }
}

/************beforeFooterButton********** */
let movingButton = document.getElementById("movingButton")

movingButton.addEventListener("mouseover",flipButton)
function flipButton (){
  console.log("hello");
  anime({
    targets: '.movingButton a p',
    rotate:'360deg',
    scale: 0.5,
    loop:false
  });
}

movingButton.addEventListener("mouseout",backButton)
function backButton (){
  anime({
    targets: '.movingButton a p',
    rotate:'-360deg',
    scale: 1,
    loop:false
  });
}
/************navBtn ***************/
let navButton = document.getElementById("navButton");
let controlNav = document.getElementById("controlNav");
let exitNav = document.getElementById("closeNav");
navButton.addEventListener("click",openNav)
function openNav(){

  controlNav.style.display="block"
  controlNav.style.transitionDelay= 5
}
exitNav.addEventListener("mouseover",closeBtnAnim)
function closeBtnAnim(){
  anime({
    targets: '#closeNav i',
    rotate:[
      {value:0,  },
      {value:360, duration: 3000, },
      {value:0, duration: 3000, },
    ],
    loop:false
  });
}

exitNav.addEventListener("click",closeNav)
  function closeNav(){
  controlNav.style.display="none"
  controlNav.style.transitionDelay= 5
}


/*******startPage*********/
let startPage= document.getElementById("startPage");
let startpageT = document.getElementById("startPageText");
window.onload=function(){
  anime({
  targets: '#startPage',
  translateY: [
    { value: 0, duration: 1000 },
    { value: -1000, duration: 2500, delay: 1000 },],
  loop: false
});

  anime({
    targets: '#startPageText  path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: function(el, i) { return i * 50 },
    direction: 'alternate',
    loop: false,
  },
  );
  setTimeout(()=>{  startpageT.style.display = "none"},3000);
  setTimeout(()=>{  startPage.style.display = "none"},3000);
}



/********************colorModeBtn************/
let lightMode = localStorage.getItem('lightMode');
let modeBtn = document.getElementById("circle");


const enableLightMOde= ()=>{
  document.body.classList.add("LightMode");
  localStorage.setItem("lightMode","enable");
}

const disableLightMOde= ()=>{
  document.body.classList.remove("LightMode");
  localStorage.setItem("lightMode",null);
}

if(lightMode === "enable"){
  enableLightMOde();
}
modeBtn.addEventListener("click",changeMode);
function changeMode(){
  let lightMode = localStorage.getItem('lightMode');

  if(lightMode !== "enable"){
    enableLightMOde();
  }
  else{
    disableLightMOde();
  }
}

/************customCursor***********/

new kursor({
        type: 2,
        removeDefaultCursor: true,
        color: 'rgba(0, 0, 0, 0.623)'
})