class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }
//floor
    guess() {
        this.middle = Math.round((this.min + this.max)/2);
        return this.middle;
    }

    lower() {
        this.max = this.middle;
        return this.max;
    }

    greater() {
        this.min = this.middle;
        return this.min;
    }
}

module.exports = GuessingGame;
