class GuessingGame {
    constructor() {}

    setRange(min, max) {
		this.max = max;  
		this.min = min;  

    }

    guess() {
		
		this.value = Math.round(this.min + Math.round(this.max - this.min) / 2);
		return this.value; 
		
		

    }

    lower() {
		this.max = this.value; 
    }

    greater() {
		this.min = this.value; 
		this.max = this.max
    }
}

module.exports = GuessingGame;
