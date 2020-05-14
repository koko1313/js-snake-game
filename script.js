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

function checkIfCatch() {
    if(snake[0].positionX == applePositionX && snake[0].positionY == applePositionY) {
        updatePoints();
        addNewShakePart();
        addNewApple();
    }
}

setInterval(() => {
    if (snake.length == 0) return;
    
    if(recentPressedButton == "rightButton") {
        moveToRight();
    } 
    else if(recentPressedButton == "leftButton") {
        moveToLeft();
    }
    else if(recentPressedButton == "downButton") {
        moveToDown();
    }
    else if(recentPressedButton == "upButton") {
        moveToUp();
    }

    checkIfCatch();
}, interval);


document.onkeydown = function(e) {
    switch (e.keyCode) {
        // Arrow left
        case 37:
            recentPressedButton = "leftButton";
            break;
        // Arrow up
        case 38:
            recentPressedButton = "upButton";
            break;
        // Arrow right
        case 39:
            recentPressedButton = "rightButton";
            break;
        // Arrow down
        case 40:
            recentPressedButton = "downButton";
            break;
    }
};