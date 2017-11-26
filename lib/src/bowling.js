function BowlingScore () {
  this.frames = 10
  this.isStrike = false
}

BowlingScore.prototype = {

  firstshot: function (score) {
    if (score === 10) {
      this.isStrike = true
      return score
    } else {
      return score
    }
  },

  secondshot: function (score) {
    this.isStrike = false
    return score
  }
}

module.exports = BowlingScore
