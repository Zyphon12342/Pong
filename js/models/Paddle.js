export class Paddle {
    constructor(x, width, height, y, speed) {
        this.x = x;
        this.width = width;
        this.height = height;
        this.y = y;
        this.speed = speed;
    }

    move(direction, canvasHeight) {
        this.y += direction * this.speed;
        if (this.y < 0) {
            this.y = 0;
        }
        if (this.y + this.height > canvasHeight) {
            this.y = canvasHeight - this.height;
        }
    }
}
