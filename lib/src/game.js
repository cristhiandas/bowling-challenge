function Game () {
  this.totalscore = 0
  this.isSpare = false
  this.gamescore
}

Game.prototype = {
  sumscores: function (score1, score2) {
    this.gamescore = score1 + score2
  },

  sumTotal: function (score) {
    this.totalscore += score
  },

  shots: function (score1, score2) {
    this.sumscores(score1, score2)
    if (this.gamescore === 10) {
      this.isSpare = true
      this.sumTotal(this.gamescore)
    } else {
      this.sumTotal(this.gamescore)
    }
  }
}

module.exports = Game
