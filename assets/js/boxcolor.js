let colorOne = "#EDDFB3";
let colorTwo = "#D8CCA3";
let colorTree = "#B09B71";
let colorFour = "#87805E";

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        document.getElementById('box1').style.backgroundColor = colorOne
    } else if (event.key === 's') {
        document.getElementById('box2').style.backgroundColor = colorTwo
    } else if (event.key === 'd') {
        document.getElementById('box3').style.backgroundColor = colorTree
    } else if (event.key === 'f') {
        document.getElementById('box4').style.backgroundColor = colorFour
    }
})
