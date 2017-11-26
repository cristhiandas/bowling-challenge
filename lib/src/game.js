function Game () {
  this.totalscore = 0
  this._isSpare = false
  this._isStrike = false
  this.gamescore = 0
}

Game.prototype = {
  _sumscores: function (score1, score2) {
    this.gamescore = score1 + score2
  },

  _sumTotal: function (score) {
    this.totalscore += score
  },

  isSpare: function () {
    if (this.gamescore === 10 && !this._isStrike) {
      this._isSpare = true
    }
  },

  _lastIsSpare: function (score1) {
    if (this._isSpare) {
      this._sumTotal(score1)
      this._isSpare = false
    }
  },

  _lastIsStrike: function (score1) {
    if (this._isStrike && score1 !== 10) {
      this._sumTotal(this.gamescore)
      this._isStrike = false
    }
  },

  _normalGame: function () {
    this._sumTotal(this.gamescore)
  },

  isStrike: function (score1) {
    if (score1 === 10) {
      this._isStrike = true
    }
  },

  _isStrikeOrSpare: function (score1) {
    this._lastIsSpare(score1)
    this._lastIsStrike(score1)
    this.isStrike(score1)
    this.isSpare()
  },

  shots: function (score1, score2) {
    this._sumscores(score1, score2)
    this._isStrikeOrSpare(score1)
    this._normalGame()
  }
}

module.exports = Game
