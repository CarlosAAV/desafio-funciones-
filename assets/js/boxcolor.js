let color;


document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
       color = "#EDDFB3";
    } else if (event.key === 's') {
       color = "#D8CCA3"
    } else if (event.key === 'd') {
      color = "#B09B71"
    } 
})
 document.querySelector("#box1").addEventListener("click", function(event){
    event.target.style.backgroundColor = color
})
document.querySelector("#box2").addEventListener("click", function(event){
    event.target.style.backgroundColor = color
})
document.querySelector("#box3").addEventListener("click", function(event){
    event.target.style.backgroundColor = color
})
document.querySelector("#box4").addEventListener("click", function(event){
    event.target.style.backgroundColor = color
})