// when the game begin
addNewApple();
snake.push(new SnakePart(0, 0));

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


function updatePoints() {
    points = points + 1;
    pointsLabel.innerText = points;
}


let resentPressedButton = "rightButton";

function checkIfCatch() {
    if(snake[0].positionX == applePositionX && snake[0].positionY == applePositionY) {
        updatePoints();
        addNewShakePart();
        addNewApple();
    }
}

setInterval(() => {
    if (snake.length == 0) return;
    
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