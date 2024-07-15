import { Ball } from '../models/Ball.js';
import { Paddle } from '../models/Paddle.js';
import { GameState } from '../models/GameState.js';
import { PongView } from '../views/PongView.js';

export class PongController {
    constructor(canvas) {
        this.canvas = canvas;
        this.view = new PongView(canvas);
        this.ball = new Ball(canvas.width / 2, canvas.height / 2, 10, 5);
        this.paddle1 = new Paddle(10, 10, 100, canvas.height / 2 - 50, 7);
        this.paddle2 = new Paddle(canvas.width - 20, 10, 100, canvas.height / 2 - 50, 7);
        this.gameState = new GameState();
        this.changeFactor = 10; 
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'w') this.paddle1.move(-1, this.canvas.height);
            if (e.key === 's') this.paddle1.move(1, this.canvas.height);
            if (e.key === 'ArrowUp') this.paddle2.move(-1, this.canvas.height);
            if (e.key === 'ArrowDown') this.paddle2.move(1, this.canvas.height);
        });

        
        const sliderInc = document.getElementById('sliderInc');
        sliderInc.addEventListener('input', (e) => {
            this.changeFactor = parseInt(e.target.value);
            document.getElementById('sliderValueInc').textContent = this.changeFactor;
        });

        const slider = document.getElementById('slider');
        slider.addEventListener('input', (e) => {
            const newMass = parseInt(e.target.value); 
            adjustSpeed(newMass); 
        });
    }

    update() {
        this.ball.move();

        // Ball collision with top and bottom walls
        if (this.ball.y + this.ball.radius > this.canvas.height || this.ball.y - this.ball.radius < 0) {
            this.ball.reverseY();
        }

        // Ball collision with paddles
        if (
            (this.ball.x - this.ball.radius < this.paddle1.x + this.paddle1.width &&
            this.ball.y > this.paddle1.y &&
            this.ball.y < this.paddle1.y + this.paddle1.height) ||
            (this.ball.x + this.ball.radius > this.paddle2.x &&
            this.ball.y > this.paddle2.y &&
            this.ball.y < this.paddle2.y + this.paddle2.height)
        ) {
            this.ball.reverseX();
            this.ball.increaseSpeed(this.changeFactor); // Adjusted to use changeFactor
        }

        // Ball out of bounds
        if (this.ball.x + this.ball.radius > this.canvas.width) {
            this.gameState.increaseScore(1);
            this.resetBall();
        } else if (this.ball.x - this.ball.radius < 0) {
            this.gameState.increaseScore(2);
            this.resetBall();
        }
    }

    resetBall() {
        const sliderValue = document.getElementById('sliderValue');
        this.ball.reset(this.canvas.width / 2, this.canvas.height / 2, parseInt(sliderValue));
    }

    resetGame() {
        this.resetBall();
        this.gameState.reset();
    }

    gameLoop() {
        this.view.clear();
        this.view.drawBall(this.ball);
        this.view.drawPaddle(this.paddle1);
        this.view.drawPaddle(this.paddle2);
        this.view.drawScore(this.gameState.scorePlayer1, this.gameState.scorePlayer2);
        this.update();
        requestAnimationFrame(() => this.gameLoop());
    }

    startGame() {
        this.gameLoop();
    }
}
