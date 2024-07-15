export class GameState {
    constructor() {
        this.scorePlayer1 = 0;
        this.scorePlayer2 = 0;
    }

    increaseScore(player) {
        if (player === 1) {
            this.scorePlayer1++;
        } else {
            this.scorePlayer2++;
        }
    }

    reset() {
        this.scorePlayer1 = 0;
        this.scorePlayer2 = 0;
    }
}
