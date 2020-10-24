const Hagman = function (word, remain) {
  this.orginal = word
  this.word = word.toLowerCase().split("");
  this.guessWord = [];
  this.remain = remain
};

Hagman.prototype.getPuzzle = function () {
  let puzzle = "";
  this.word.forEach((letter) => {
    if (this.guessWord.includes(letter) || letter == " ") {
      puzzle += letter;
    } else {
      puzzle += "*";
    }
  });
  return puzzle;
};

Hagman.prototype.makingGuess = function(letter){
  const isUnique = !this.guessWord.includes(letter)
  const isBad = !this.word.includes(letter)
  if(isUnique){
    this.guessWord.push(letter)
    this.chances -= 1
  }
  if(isUnique && isBad){
    this.remain--;
  }
}

Hagman.prototype.gameStatus = function(){
  const isWin = this.word.every((letter)=>{
    return this.guessWord.includes(letter)
  })
  if(isWin){
    console.log("Congrats you won");
  }else{
    console.log(`Nice try, the word is ${this.orginal}`);
  }
  
}

const game1 = new Hagman("cat", 2);
console.log(game1.getPuzzle());
game1.makingGuess('c')
game1.makingGuess('t')
game1.makingGuess('a')
console.log(game1.getPuzzle());
console.log(game1.remain);
game1.gameStatus()

