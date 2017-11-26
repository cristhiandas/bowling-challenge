describe('bowling', function () {
  var Game = require('../lib/src/game')
  var game

  beforeEach(function () {
    game = new Game()
  })

  describe('when starting a new game', function () {
    it('has a total score', function () {
      expect(game.totalscore).toEqual(0)
    })

    it('has spare set as false by dafult', function () {
      expect(game.isSpare).toEqual(false)
    })
  })

  describe('When entering 2 scores', function () {
    it('Adds the scores to the total', function () {
      game.shots(2, 5)
      expect(game.totalscore).toEqual(7)
    })

    it('Knows when there is a spare', function () {
      game.shots(5, 5)
      expect(game.isSpare).toEqual(true)
    })

    it('Knows when there is NOT a spare', function () {
      game.shots(5, 4)
      expect(game.isSpare).toEqual(false)
    })

    it('Knows when the previous was a spare', function () {
      game.shots(5, 5)
      game.shots(2, 3)
      expect(game.totalscore).toEqual(17)
    })

    it('Knows when the previous was NOT a spare', function () {
      game.shots(5, 5)
      game.shots(2, 3)
      game.shots(2, 3)
      expect(game.totalscore).toEqual(22)
    })

    it('Adds with multiples shots', function () {
      game.shots(2, 5)
      game.shots(2, 5)
      expect(game.totalscore).toEqual(14)
    })
  })
})
