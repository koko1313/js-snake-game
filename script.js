const playground = document.getElementById("playground");
const snakeHead = document.getElementsByClassName("snake")[0];
const ciganin = document.getElementById("ciganin");

const playgroundWidth = playground.clientWidth;
const playgroundHeight = playground.clientHeight;

const ciganinWidth = ciganin.clientWidth;
const ciganinHeight = ciganin.clientHeight;

const snakeWidth = snakeHead.clientWidth;
const snakeHeight = snakeHead.clientHeight;

const step = 10;
const interval = 150;

let ciganinPositionX = 0;
let ciganinPositionY = 0;

const SnakePart = function(positionX, positionY, direction, domElement) {
    var positionX;
    var positionY;
    var direction;
    var domElement;

    this.positionX = positionX;
    this.positionY = positionY;
    this.direction = direction;
    this.domElement = domElement;

    this.move = () => {
        switch(this.direction) {
            case "right" : 
                moveToRight(this);
                break;
            case "down" :
                moveToDown(this);
                break;
            case "up" :
                moveToUp(this);
                break;
            case "left" :
                moveToLeft(this);
                break;
        }

        this.domElement.style.top = this.positionY;
        this.domElement.style.left = this.positionX;
    }

    return this;
}

const snake = [new SnakePart(0, 0, "right", snakeHead)];

function addSnakePart() {
    const lastSnakePart = snake[snake.length-1];

    const domElement = document.createElement("div");
    domElement.setAttribute("class", "snake");
    domElement.style.left = lastSnakePart.positionX;
    domElement.style.top = lastSnakePart.positionY;
    playground.appendChild(domElement);

    let snakePart = new SnakePart(lastSnakePart.positionX, lastSnakePart.positionY, lastSnakePart.direction, domElement);

    setTimeout(() => {
        snake.push(snakePart);
    }, interval);
}

let resentPressedButton = "rightButton";

function moveToRight(currentSnakePart) {
    if(currentSnakePart.positionX == playgroundWidth - snakeWidth) {
        currentSnakePart.positionX = 0;
    }

    currentSnakePart.positionX = currentSnakePart.positionX + step;
}

function moveToLeft(currentSnakePart) {
    if(currentSnakePart.positionX == 0) {
        currentSnakePart.positionX = playgroundWidth - snakeWidth;
    }

    currentSnakePart.positionX = currentSnakePart.positionX - step;
}

function moveToDown(currentSnakePart) {
    if(currentSnakePart.positionY == playgroundHeight - snakeHeight) {
        currentSnakePart.positionY = 0;
    }

    currentSnakePart.positionY = currentSnakePart.positionY + step;
}

function moveToUp(currentSnakePart) {
    if(currentSnakePart.positionY == 0) {
        currentSnakePart.positionY = playgroundHeight - snakeHeight;
    }

    currentSnakePart.positionY = currentSnakePart.positionY - step;
}

function checkIfCatch() {
    if(snake[0].positionX == ciganinPositionX && snake[0].positionY == ciganinPositionY) {
        addSnakePart();
        addNewCiganin();
    }
}

setInterval(() => {
    for(let i = 0; i < snake.length; i++) {
        const currentSnakePart = snake[i];
        let inter = interval * i + 1;

        if(i == 0) inter = 0;

        switch(resentPressedButton) {
            case "rightButton" :
                setTimeout(() => {
                    currentSnakePart.direction = "right";
                }, inter);
                break;
            case "leftButton" :
                setTimeout(() => {
                    currentSnakePart.direction = "left";
                }, inter);
                break;
            case "downButton" : 
                setTimeout(() => {
                    currentSnakePart.direction = "down";
                }, inter);
                break;
            case "upButton" :
                setTimeout(() => {
                    currentSnakePart.direction = "up";
                }, inter);
                break;
        }

        currentSnakePart.move();
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
    ciganinPositionX = ciganinWidth + Math.floor(Math.random() * playgroundWidth - (ciganinWidth * 2));
    ciganinPositionX = ciganinPositionX - ciganinPositionX % step;

    ciganinPositionY = ciganinHeight + Math.floor(Math.random() * playgroundHeight - (ciganinHeight * 2));
    ciganinPositionY = ciganinPositionY - ciganinPositionY % step;

    ciganin.style.left = ciganinPositionX;
    ciganin.style.top = ciganinPositionY;
}


addNewCiganin();