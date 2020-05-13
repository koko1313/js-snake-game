const playground = document.getElementById("playground");
const snake = document.getElementById("snake");
let ciganin = document.getElementById("ciganin");

const playgroundWidth = playground.clientWidth;
const playgroundHeight = playground.clientHeight;

const snakeWidth = snake.clientWidth;
const snakeHeight = snake.clientHeight;

const step = 10;

let positionX = 0;
let positionY = 0;
let ciganinPositionX = 0;
let ciganinPositionY = 0;

let resentPressedButton = "rightButton";

function moveToRight() {
    if(positionX == playgroundWidth - snakeWidth) {
        positionX = 0;
    }

    positionX = positionX + step;
    snake.style.left = positionX;
}

function moveToLeft() {
    if(positionX == 0) {
        positionX = playgroundWidth - snakeWidth;
    }

    positionX = positionX - step;
    snake.style.left = positionX;
}

function moveToDown() {
    if(positionY == playgroundHeight - snakeHeight) {
        positionY = 0;
    }

    positionY = positionY + step;
    snake.style.top = positionY;
}

function moveToUp() {
    if(positionY == 0) {
        positionY = playgroundHeight - snakeHeight;
    }

    positionY = positionY - step;
    snake.style.top = positionY;
}

setInterval(() => {
    if(resentPressedButton == "rightButton") {
        moveToRight();
    } 
    else if(resentPressedButton == "leftButton") {
        moveToLeft();
    }
    else if(resentPressedButton == "downButton") {
        moveToDown();
    }
    else if(resentPressedButton == "upButton") {
        moveToUp();
    }

    if(positionX == ciganinPositionX && positionY == ciganinPositionY) {
        addNewCiganin();
    }
}, 200);


document.onkeydown = function(e) {
    switch (e.keyCode) {
        // Arrow left
        case 37:
            resentPressedButton = "leftButton";
            break;

        // Arrow up
        case 38:
            resentPressedButton = "upButton";
            break;

        // Arrow right
        case 39:
            resentPressedButton = "rightButton";
            break;

        // Arrow down
        case 40:
            resentPressedButton = "downButton";
            break;
    }
};


// #############################################################
function addNewCiganin() {
    ciganinPositionX = Math.floor(Math.random() * playgroundWidth - snakeWidth);
    ciganinPositionX = ciganinPositionX - ciganinPositionX % step;

    ciganinPositionY = Math.floor(Math.random() * 590);
    ciganinPositionY = ciganinPositionY - ciganinPositionY % step;

    ciganin.style.left = ciganinPositionX;
    ciganin.style.top = ciganinPositionY;
}


addNewCiganin();