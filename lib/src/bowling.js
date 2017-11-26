function BowlingScore () {
  this.frames = 10
  this.isStrike = false
  this.isSpare = false
}

BowlingScore.prototype = {

  firstshot: function (score) {
    if (score === 10) {
      this.isStrike = true
      return score
    } else {
      this.isStrike = false
      return score
    }
  },

  secondshot: function (score) {
    return score
  }
}

module.exports = BowlingScore
