const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
const upButton = document.getElementById("upButton");
const downButton = document.getElementById("downButton");

leftButton.addEventListener("click", function() {
    resentPressedButton = "leftButton";
});

rightButton.addEventListener("click", function() {
    resentPressedButton = "rightButton";
});

upButton.addEventListener("click", function() {
    resentPressedButton = "upButton";
});

downButton.addEventListener("click", function() {
    resentPressedButton = "downButton";
});