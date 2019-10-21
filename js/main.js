const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    getGuess: function() {
    var guess;
     do {
      guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`));   
     } 
     while(guess < this.smallestNum || guess > this.biggestNum || isNaN(guess)); 
     return guess; 
    },
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
        do {
          var masterGuess = this.getGuess();
          this.prevGuesses.push(masterGuess);
          this.render(masterGuess);
        } while (masterGuess !== this.secretNum);     
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
    


  
