export class PongView {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawBall(ball) {
        this.ctx.beginPath();
        this.ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = '#fff';
        this.ctx.fill();
        this.ctx.closePath();
    }

    drawPaddle(paddle) {
        this.ctx.fillStyle = '#fff';
        this.ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
    }

    drawScore(scorePlayer1, scorePlayer2) {
        this.ctx.font = '24px Arial';
        this.ctx.fillStyle = '#fff';
        this.ctx.fillText(`Player 1: ${scorePlayer1}`, 20, 30);
        this.ctx.fillText(`Player 2: ${scorePlayer2}`, this.canvas.width - 150, 30);
    }
}
