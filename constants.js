// PLAYGROUND CONSTANTS
const playground = document.getElementById("playground");

const playgroundWidth = playground.clientWidth;
const playgroundHeight = playground.clientHeight;

const step = 20;
const interval = 150;

const pointsLabel = document.getElementById("pointsLabel");
let points = 1;


// SNAKE CONSTANTS
const snake = [];
const snakeArea = document.getElementById("snake");

const snakePartWidth = 20;
const snakePartHeight = 20;


// apple CONSTANTS
const apple = document.getElementById("apple");

const appleWidth = 20;
const appleHeight = 20;