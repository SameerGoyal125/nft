const primaryNav=document.querySelector(".primary-navigation");
const navToggle=document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener('click',()=>{
  const visibility=primaryNav.getAttribute("data-visible");
  if(visibility==="false"){
    primaryNav.setAttribute('data-visible',true);
    navToggle.setAttribute('aria-expanded',true);
    document.querySelector(".box").setAttribute('checked',false);
    document.querySelector(".top").setAttribute('aria-expanded',true);
    document.querySelector(".middle").setAttribute('aria-expanded',true);
    document.querySelector(".bottom").setAttribute('aria-expanded',true);
  } else if(visibility==="true"){
    primaryNav.setAttribute('data-visible',false);
    navToggle.setAttribute('aria-expanded',false);
    document.querySelector(".box").setAttribute('checked',true);
    document.querySelector(".top").setAttribute('aria-expanded',false);
    document.querySelector(".middle").setAttribute('aria-expanded',false);
    document.querySelector(".bottom").setAttribute('aria-expanded',false);
  }
})
const stringd=['s','w','e','e','t','C','o','n','e']
const colors=['#80B1FF','#C5C5FF','#A4A4F4','#FFD2EA','#FFC2DF','#FFA4D4','#FFCC99','#FFE98A','#79E8B3','#B3FFC7','#BBEFFF','#99E2FF']
var change=[100]
var no;
function randomchange()  {
  result=''
  for(let x in stringd){

result+=stringd[x].fontcolor(colors[Math.floor(Math.random()*colors.length)]);
}
document.getElementById('logo').innerHTML = result;
change=[100];
}
setInterval('randomchange()', 500);