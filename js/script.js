const toggle = document.querySelector('.navbar nav .toggle');
const nav = document.querySelectorAll('.navbar nav .collapas');
toggle.addEventListener('click',function(){
   nav.forEach(col=>col.classList.toggle('collapas-show'))
});