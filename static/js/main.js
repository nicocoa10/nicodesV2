
var button = document.querySelector('#display')
var onoff=0;
var plusminus = document.querySelector('.plus')
var plusminus1 = document.querySelector('.plus1')


button.addEventListener('click', function (){
  // alert("Hello World!");
  if (onoff ==0 ) {
    changelog.style.display = "inline";
    onoff =1;
    plusminus.innerHTML='[-] '
    plusminus1.innerHTML='[-] '
  }
  else{
    changelog.style.display = "none";
    onoff =0;
    plusminus.innerHTML='[+] '
    plusminus1.innerHTML='[+] '


  }


});

var changelog = document.querySelector('#changelog')

changelog.style.display = "none";

var linkpop = document.querySelectorAll('.appear')

for (var i = 0; i < linkpop.length; i++) {
  linkpop[i].style.display = "none";
}


var description = document.querySelectorAll('.description')

description[0].addEventListener('mouseover', function () {
  linkpop[0].style.display = "inline";

})

description[0].addEventListener('mouseout', function () {
  linkpop[0].style.display = "none";

})

description[1].addEventListener('mouseover', function () {
  linkpop[1].style.display = "inline";

})

description[1].addEventListener('mouseout', function () {
  linkpop[1].style.display = "none";

})

description[2].addEventListener('mouseover', function () {
  linkpop[2].style.display = "inline";

})

description[2].addEventListener('mouseout', function () {
  linkpop[2].style.display = "none";

})

description[3].addEventListener('mouseover', function () {
  linkpop[3].style.display = "inline";

})

description[3].addEventListener('mouseout', function () {
  linkpop[3].style.display = "none";

})

description[4].addEventListener('mouseover', function () {
  linkpop[4].style.display = "inline";

})

description[4].addEventListener('mouseout', function () {
  linkpop[4].style.display = "none";

})

description[5].addEventListener('mouseover', function () {
  linkpop[5].style.display = "inline";

})

description[5].addEventListener('mouseout', function () {
  linkpop[5].style.display = "none";

})

description[6].addEventListener('mouseover', function () {
  linkpop[6].style.display = "inline";

})

description[6].addEventListener('mouseout', function () {
  linkpop[6].style.display = "none";

})

description[7].addEventListener('mouseover', function () {
  linkpop[7].style.display = "inline";

})

description[7].addEventListener('mouseout', function () {
  linkpop[7].style.display = "none";

})

description[8].addEventListener('mouseover', function () {
  linkpop[8].style.display = "inline";

})

description[8].addEventListener('mouseout', function () {
  linkpop[8].style.display = "none";

})
