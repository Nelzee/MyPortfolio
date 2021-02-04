const nav = document.querySelector("nav");
const main = document.querySelector("main");
const topOfNav = nav.offsetTop;


function fixedNav(){
  console.log(topOfNav, window.scrollY);
  if(topOfNav <= window.scrollY - 1){
    main.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add("fixed-nav");
  }
  else {
    main.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
}
window.addEventListener('scroll', fixedNav);