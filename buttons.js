const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
const upButton = document.getElementById("upButton");
const downButton = document.getElementById("downButton");

leftButton.addEventListener("click", function() {
    recentPressedButton = "leftButton";
});

rightButton.addEventListener("click", function() {
    recentPressedButton = "rightButton";
});

upButton.addEventListener("click", function() {
    recentPressedButton = "upButton";
});

downButton.addEventListener("click", function() {
    recentPressedButton = "downButton";
});