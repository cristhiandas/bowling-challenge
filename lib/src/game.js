function Game () {
  this.totalscore = 0
  this._isSpare = false
  this._isStrike = false
  this.gamescore = 0
}

Game.prototype = {
  sumscores: function (score1, score2) {
    this.gamescore = score1 + score2
  },

  sumTotal: function (score) {
    this.totalscore += score
  },

  isSpare: function () {
    if (this.gamescore === 10 && !this._isStrike) {
      this._isSpare = true
    }
  },

  lastIsSpare: function (score1) {
    if (this._isSpare) {
      this.sumTotal(score1)
      this._isSpare = false
    }
  },

  lastIsStrike: function (score1) {
    if (this._isStrike && score1 !== 10) {
      this.sumTotal(this.gamescore)
      this._isStrike = false
    }
  },

  normalGame: function () {
    this.sumTotal(this.gamescore)
  },

  isStrike: function (score1) {
    if (score1 === 10) {
      this._isStrike = true
    }
  },

  isStrikeOrSpare: function (score1) {
    this.lastIsSpare(score1)
    this.lastIsStrike(score1)
    this.isStrike(score1)
    this.isSpare()
  },

  shots: function (score1, score2) {
    this.sumscores(score1, score2)
    this.isStrikeOrSpare(score1)
    this.normalGame()
  }
}

module.exports = Game
