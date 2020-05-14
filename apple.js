let applePositionX = 0;
let applePositionY = 0;


function addNewApple() {
    applePositionX = Math.floor(Math.random() * (playgroundWidth - appleWidth) + appleWidth);
    applePositionX = applePositionX - applePositionX % step;

    applePositionY = Math.floor(Math.random() * (playgroundHeight - appleHeight) + appleHeight);
    applePositionY = applePositionY - applePositionY % step;

    let apple = document.getElementById("apple");
    apple.style.left = applePositionX;
    apple.style.top = applePositionY;
}