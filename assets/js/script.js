ele = document.getElementById("ele1")
function pintar(yellow) {
  yellow.style.backgroundColor = 'yellow'
}
pintar(ele)
ele.addEventListener("click", function(){
    pintar(ele)
    ele.style.backgroundColor = 'green'
});