function SnakePart(positionX, positionY) {
    this.positionX = positionX;
    this.positionY = positionY;
    
    this.domElement = document.createElement("div");
    this.domElement.setAttribute("class", "snake-part");

    this.domElement.style.left = positionX;
    this.domElement.style.top = positionY;
    
    snakeArea.appendChild(this.domElement);
}

function addNewShakePart() {
    const lastSnakePart = snake[snake.length - 1];

    snake.push(new SnakePart(lastSnakePart.positionX, lastSnakePart.positionY));
}