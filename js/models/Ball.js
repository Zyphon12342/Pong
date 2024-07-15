export class Ball {
    constructor(x, y, radius, speed, mass) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
        this.dx = speed;
        this.dy = speed;
        this.mass = mass; 
    }

    move() {
        this.x += this.dx;
        this.y += this.dy;
    }

    reverseX() {
        this.dx = -this.dx;
    }

    reverseY() {
        this.dy = -this.dy;
    }

    // Increasing K.E by factor%
    increaseSpeed(factor) {
        const speedIncreaseFactor = Math.sqrt(1 + (factor / 100));
        this.speed *= speedIncreaseFactor;
        this.dx = this.dx > 0 ? this.speed : -this.speed;
        this.dy = this.dy > 0 ? this.speed : -this.speed;
    }
    adjustSpeed(newMass) {
        const originalKE = 0.5 * this.mass * this.speed ** 2;
        const newSpeed = Math.sqrt(2 * originalKE / newMass);
        this.mass = newMass;
        this.speed = newSpeed;
        this.dx = this.dx > 0 ? this.speed : -this.speed;
        this.dy = this.dy > 0 ? this.speed : -this.speed;
    }

    reset(x, y, mass) {
        this.x = x;
        this.y = y;
        this.speed = 5;
        this.dx = 5;
        this.dy = 5;
        this.mass = mass; 
    }
}
