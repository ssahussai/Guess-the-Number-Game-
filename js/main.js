const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    getGuess: function() {
     do {
       var guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`));     
     } 
     while(guess < this.smallestNum || guess > this.biggestNum || isNaN(guess));  
    },
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
        this.getGuess();
        prevGuesses.push(guess);
    }
  };

  
