import { update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection } from './snake.js';
import { update as updateFood, draw as drawFood} from './food.js';
import { outsideGrid } from "./grid.js";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');
let snakeSpeed = document.getElementById('inputSnakeSpeed').value;

function main(currentTime){
    snakeSpeed = document.getElementById('inputSnakeSpeed').value;
    if (gameOver) {
        location.reload();
        alert('You Lost :(');
    }
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / snakeSpeed) return;


    console.log("Render");
    lastRenderTime = currentTime;


    update();
    draw();
}

window.requestAnimationFrame(main);

function update(){
    updateSnake();
    updateFood();
    checkDeath();
}

function draw(){
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}