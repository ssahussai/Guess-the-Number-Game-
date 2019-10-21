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
     this.prevGuesses.push(guess);
     this.render(guess);
    },
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
        this.getGuess();
    },
    render: function(guess) {
      if (guess === this.secretNum) {
        alert(`Congrats! You guessed the number in ${this.prevGuesses.length} guesses`);
      } else if (guess < this.secretNum) {
        alert(`Your guess is too low. Previous guesses: ${this.prevGuesses.join(' ,')}`);
      } else if (guess > this.secretNum) {
        alert(`Your guess is too high. Previous guesses: ${this.prevGuesses.join(' ,')}`);
      }
    }
    };
    
   game.play();
    


  
