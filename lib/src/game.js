function Game () {
  this.totalscore = 0
  this.isSpare = false
  this.gamescore = 0
}

Game.prototype = {
  sumscores: function (score1, score2) {
    this.gamescore = score1 + score2
  },

  sumTotal: function (score) {
    this.totalscore += score
  },

  spare: function () {
    this.isSpare = true
    this.sumTotal(this.gamescore)
  },

  lastIsSpare: function (score1) {
    if (this.isSpare) {
      this.sumTotal(score1)
      this.isSpare = false
    }
  },

  normalGame: function () {
    if (this.gamescore === 10) {
      this.spare()
    } else {
      this.sumTotal(this.gamescore)
    }
  },

  shots: function (score1, score2) {
    this.sumscores(score1, score2)
    this.lastIsSpare(score1)
    this.normalGame()
  }
}

module.exports = Game
