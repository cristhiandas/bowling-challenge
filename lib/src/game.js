function Game () {
  this.totalscore = 0
}

Game.prototype = {

  shots: function (score1, score2) {
    this.totalscore += score1 + score2
  }
}

module.exports = Game
