document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("#mob").style.right = "0px";
  document.querySelector(".fa-xmark").style.display = "inline";
  document.querySelector(".fa-bars").style.visibility = "hidden";
  document.querySelector(".t").style.right = "10px";
});
document.querySelector(".fa-xmark").addEventListener("click", () => {
  document.querySelector(".fa-xmark").style.display = "none";
  // document.querySelector(".fa-bars").style.display = "block";
  document.querySelector(".fa-bars").style.visibility = "visible";
  // document.querySelector(".navbar").style.marginTop = "0px";
  document.querySelector(".t").style.right = "-200px";
  document.querySelector("#mob").style.right = "-200px";
});
let header = document.querySelector('.header');
console.log('ic');
window.addEventListener("scroll",function() {
console.log('scroll');

  header.classList.toggle('scroll', window.scrollY > 0);
})