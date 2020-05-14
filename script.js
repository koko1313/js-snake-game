const playground = document.getElementById("playground");
const snakeArea = document.getElementById("snake-area")
const snakeHead = document.getElementsByClassName("snake-part")[0];
const ciganin = document.getElementById("ciganin");

const playgroundWidth = playground.clientWidth;
const playgroundHeight = playground.clientHeight;

const ciganinWidth = ciganin.clientWidth;
const ciganinHeight = ciganin.clientHeight;

const snakePartWidth = snakeHead.clientWidth;
const snakePartHeight = snakeHead.clientHeight;

const step = 20;
const interval = 150;

let ciganinPositionX = 0;
let ciganinPositionY = 0;

const SnakePart = function(positionX, positionY, domElement) {
    var positionX;
    var positionY;
    var domElement;

    this.positionX = positionX;
    this.positionY = positionY;
    this.domElement = domElement;

    return this;
}

const snake = [new SnakePart(0, 0, snakeHead)];

let resentPressedButton = "rightButton";


function moveToRight() {
    const firstSnakePart = snake[0];
    const lastSnakePart = snake.pop();

    lastSnakePart.positionX = firstSnakePart.positionX + step;
    lastSnakePart.positionY = firstSnakePart.positionY;

    if(lastSnakePart.positionX > playgroundWidth - snakePartWidth) {
        lastSnakePart.positionX = 0;
    }

    lastSnakePart.domElement.style.left = lastSnakePart.positionX;
    lastSnakePart.domElement.style.top = lastSnakePart.positionY;

    snake.unshift(lastSnakePart);
}

function moveToLeft() {
    const firstSnakePart = snake[0];
    const lastSnakePart = snake.pop();

    lastSnakePart.positionX = firstSnakePart.positionX - step;
    lastSnakePart.positionY = firstSnakePart.positionY;

    if(lastSnakePart.positionX < 0) {
        lastSnakePart.positionX = playgroundWidth - snakePartWidth;
    }

    lastSnakePart.domElement.style.left = lastSnakePart.positionX;
    lastSnakePart.domElement.style.top = lastSnakePart.positionY;

    snake.unshift(lastSnakePart);
}

function moveToDown() {
    const firstSnakePart = snake[0];
    const lastSnakePart = snake.pop();

    lastSnakePart.positionX = firstSnakePart.positionX;
    lastSnakePart.positionY = firstSnakePart.positionY + step;

    if(lastSnakePart.positionY > playgroundHeight - snakePartHeight) {
        lastSnakePart.positionY = 0;
    }

    lastSnakePart.domElement.style.left = lastSnakePart.positionX;
    lastSnakePart.domElement.style.top = lastSnakePart.positionY;

    snake.unshift(lastSnakePart);
}

function moveToUp() {
    const firstSnakePart = snake[0];
    const lastSnakePart = snake.pop();

    lastSnakePart.positionX = firstSnakePart.positionX;
    lastSnakePart.positionY = firstSnakePart.positionY - step;

    if(lastSnakePart.positionY < 0) {
        lastSnakePart.positionY = playgroundHeight - snakePartHeight;
    }

    lastSnakePart.domElement.style.left = lastSnakePart.positionX;
    lastSnakePart.domElement.style.top = lastSnakePart.positionY;

    snake.unshift(lastSnakePart);
}


function addSnakePart() {
    const lastSnakePart = snake[snake.length - 1];

    let positionX = lastSnakePart.positionX;
    let positionY = lastSnakePart.positionY;

    const domElement = document.createElement("div");
    domElement.setAttribute("class", "snake-part");
    domElement.style.left = positionX;
    domElement.style.top = positionY;

    snake.push(new SnakePart(positionX, positionY, domElement));

    snakeArea.appendChild(domElement);
}

function checkIfCatch() {
    if(snake[0].positionX == ciganinPositionX && snake[0].positionY == ciganinPositionY) {
        addSnakePart();
        addNewCiganin();
    }
}

setInterval(() => {
    switch(resentPressedButton) {
        case "rightButton" :
            moveToRight();
            break;
        case "leftButton" :
            moveToLeft();
            break;
        case "downButton" : 
            moveToDown();
            break;
        case "upButton" :
            moveToUp();
            break;
    }

    checkIfCatch();
}, interval);


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
    ciganinPositionX = Math.floor(Math.random() * (playgroundWidth - ciganinWidth) + ciganinWidth);
    ciganinPositionX = ciganinPositionX - ciganinPositionX % step;

    ciganinPositionY = Math.floor(Math.random() * (playgroundHeight - ciganinHeight) + ciganinHeight);
    ciganinPositionY = ciganinPositionY - ciganinPositionY % step;

    ciganin.style.left = ciganinPositionX;
    ciganin.style.top = ciganinPositionY;
}


addNewCiganin();