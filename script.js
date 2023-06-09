document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("#mob").style.right = "0px";
  document.querySelector(".fa-xmark").style.display = "inline";
  document.querySelector(".fa-bars").style.visibility = "hidden";
  document.querySelector(".t").style.right = "35vw";
  document.querySelector(".t").style.transitionDelay = "0.2s";
});
document.querySelector(".fa-xmark").addEventListener("click", () => {
  document.querySelector(".fa-xmark").style.display = "none";

  document.querySelector(".fa-bars").style.visibility = "visible";
  
  document.querySelector(".t").style.right = "-50vw";
  document.querySelector("#mob").style.right = "-100vw";
  document.querySelector(".t").style.transitionDelay = "0s";

});

let element =document.querySelectorAll('.mobli');
  let width=window.innerWidth;

  
  for (var i = 0; i < element.length; i++) {
    element[i].classList.toggle('width', width<900);
  }
let header = document.querySelector('.header');
let width2=document.querySelectorAll('.width');
for (var i = 0; i < width2.length; i++) {
  width2[i].addEventListener('click',()=>{
    document.querySelector(".fa-xmark").style.display = "none";

    document.querySelector(".fa-bars").style.visibility = "visible";
    
    document.querySelector(".t").style.right = "-50vw";
    document.querySelector("#mob").style.right = "-100vw";
    document.querySelector(".t").style.transitionDelay = "0s";
  })
}
window.addEventListener("scroll",function() {
  header.classList.toggle('scroll', window.scrollY > 0);
})
setTimeout(()=>{
let starter = document.querySelector('.loader');

  starter.classList.add('hide');
},2000)
// let element =document.querySelectorAll('.mobli');
window.addEventListener('resize',function(){
  let width=window.innerWidth;

  
  for (var i = 0; i < element.length; i++) {
    element[i].classList.toggle('width', width<900);
  }

})


// chat gpt
var content = document.getElementById('scrollContent');
    
    function scrollPrev() {
      content.appendChild(content.firstElementChild);
    }

    function scrollNext() {
      content.insertBefore(content.lastElementChild, content.firstElementChild);
    }