const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
const upButton = document.getElementById("upButton");
const downButton = document.getElementById("downButton");

leftButton.addEventListener("mousedown", function() {
    recentPressedButton = "leftButton";
});

rightButton.addEventListener("mousedown", function() {
    recentPressedButton = "rightButton";
});

upButton.addEventListener("mousedown", function() {
    recentPressedButton = "upButton";
});

downButton.addEventListener("mousedown", function() {
    recentPressedButton = "downButton";
});