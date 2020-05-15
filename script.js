const playground = document.getElementById("playground");
const ctx = playground.getContext("2d");

const poinsLabel = document.getElementById("points");
let points = 1;

const squareWidth = 20;

const step = 20;

const interval = 150;

let recentPressedButton = "rightButton";


// ######################################

const apple = {
    x: 0,
    y: 0,
    getX: () => x,
    getY: () => y,
    draw: () => {
        ctx.beginPath();
        ctx.rect(x, y, squareWidth, squareWidth);

        ctx.lineWidth = "1";
        ctx.strokeStyle = "black";
        ctx.stroke();

        ctx.fillStyle = "#ff5656";
        ctx.fill();
    },
    reDraw: () => {
        x = Math.floor(Math.random() * (playground.width - squareWidth) + squareWidth);
        x = x - x % squareWidth;

        y = Math.floor(Math.random() * (playground.height - squareWidth) + squareWidth);
        y = y - y % squareWidth;

        apple.draw();
    }
}

// ######################################

const SnakePart = function(x, y) {
    this.x = x;
    this.y = y;

    this.draw = (isFirts = false) => {
        ctx.beginPath();
        ctx.rect(this.x, this.y, squareWidth, squareWidth);

        ctx.lineWidth = "1";
        ctx.strokeStyle = "black";
        ctx.stroke();

        if(isFirts) ctx.fillStyle = "#b5ffb9";
        else ctx.fillStyle = "#12f202";
        ctx.fill();
    }
}

// ######################################

const snake = [new SnakePart(0, 0)];
apple.reDraw();

// ######################################

const moveRight = (firstPart, lastPart) => {
    lastPart.x = firstPart.x + step;
    lastPart.y = firstPart.y;

    if(lastPart.x > playground.width - squareWidth) lastPart.x = 0;
};

const moveLeft = (firstPart, lastPart) => {
    lastPart.x = firstPart.x - step;
    lastPart.y = firstPart.y;

    if(lastPart.x < 0) lastPart.x = playground.width - squareWidth;
};

const moveDown = (firstPart, lastPart) => {
    lastPart.x = firstPart.x;
    lastPart.y = firstPart.y + step;

    if(lastPart.y > playground.height - squareWidth) lastPart.y = 0;
};

const moveUp = (firstPart, lastPart) => {
    lastPart.x = firstPart.x;
    lastPart.y = firstPart.y - step;

    if(lastPart.y < 0) lastPart.y = playground.height - squareWidth;
};

// ######################################

const redrawSnake = () => {
    // draw it in opposite side, so the head will be drawn last (will be over every other part (like z-index))
    for(let i = snake.length - 1; i >= 0; i--) {
        if(i === 0) snake[i].draw(true); // the first part
        else snake[i].draw();
    }
}

const redrawPlayground = () => {
    ctx.clearRect(0, 0, playground.width, playground.height);
    redrawSnake()
    apple.draw();
}

const updatePoints = () => {
    points++;
    poinsLabel.innerText = points;
}

const checkIfCatch = () => {
    if(snake[0].x == apple.getX() && snake[0].y == apple.getY()) {
        updatePoints();
        apple.reDraw();
        const lastSnakePart = snake[snake.length - 1];
        snake.push(new SnakePart(lastSnakePart.x, lastSnakePart.y));
    }
}

setInterval(() => {
    let firstPart = snake[0];
    let lastPart = snake.pop();

    switch(recentPressedButton) {
        case "rightButton": moveRight(firstPart, lastPart); break;
        case "leftButton": moveLeft(firstPart, lastPart); break;
        case "downButton": moveDown(firstPart, lastPart); break;
        case "upButton": moveUp(firstPart, lastPart); break;
    }

    snake.unshift(lastPart);

    redrawPlayground();

    checkIfCatch();
}, interval);


window.addEventListener("keydown", (e) => {
    switch(e.keyCode) {
        case 37:
            recentPressedButton = "leftButton";
            break;
        case 38:
            recentPressedButton = "upButton";
            break;
        case 39:
            recentPressedButton = "rightButton";
            break;
        case 40:
            recentPressedButton = "downButton";
            break;
    }
});