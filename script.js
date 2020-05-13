let snake = document.getElementById("snake");

let positionX = 0;
let positionY = 0;
let ciganinPositionX = 0;
let ciganinPositionY = 0;

let resentPressedButton = "rightButton";

function moveToRight() {
    if(positionX == 580) {
        positionX = 0;
    }

    positionX = positionX + 10;
    snake.style.left = positionX;
}

function moveToLeft() {
    if(positionX == 0) {
        positionX = 580;
    }

    positionX = positionX - 10;
    snake.style.left = positionX;
}

function moveToDown() {
    if(positionY == 580) {
        positionY = 0;
    }

    positionY = positionY + 10;
    snake.style.top = positionY;
}

function moveToUp() {
    if(positionY == 0) {
        positionY = 580;
    }

    positionY = positionY - 10;
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
    ciganinPositionX = Math.floor(Math.random() * 590);
    ciganinPositionX = ciganinPositionX - ciganinPositionX % 10;

    ciganinPositionY = Math.floor(Math.random() * 590);
    ciganinPositionY = ciganinPositionY - ciganinPositionY % 10;

    let ciganin = document.getElementById("ciganin");
    ciganin.style.left = ciganinPositionX;
    ciganin.style.top = ciganinPositionY;
}


addNewCiganin();