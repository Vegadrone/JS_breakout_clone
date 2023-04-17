import Paddle from "./paddle.mjs";

const canvas = document.getElementById('game-board');
const ctx = canvas.getContext('2d');

const GAME_WIDTH = 1500;
const GAME_HEIGHT = 800;


let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

paddle.draw(ctx);

let lastTime = 0;

function gameLoop(timestamp){
    
    let deltaTime = timestamp - lastTime;

    lastTime = timestamp;

    ctx.clearRect(0,0,GAME_WIDTH, GAME_HEIGHT);

    paddle.update(deltaTime);

    paddle.draw(ctx);

    requestAnimationFrame(gameLoop);
}

gameLoop();