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
      expect(game._isSpare).toEqual(false)
    })

    it('has strike set as false by dafult', function () {
      expect(game._isStrike).toEqual(false)
    })
  })

  describe('When entering 2 scores', function () {
    it('Adds the scores to the total', function () {
      game.shots(2, 5)
      expect(game.totalscore).toEqual(7)
    })

    it('Knows when there is a spare', function () {
      game.shots(5, 5)
      expect(game._isSpare).toEqual(true)
    })

    it('Knows when there is NOT a spare', function () {
      game.shots(5, 4)
      expect(game._isSpare).toEqual(false)
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

    it('Knows when there is a strike', function () {
      game.shots(10, 0)
      expect(game._isStrike).toEqual(true)
    })

    it('Knows the difference between spare & strike', function () {
      game.shots(10, 0)
      expect(game._isSpare).toEqual(false)
    })

    it('Knows when the previous shot was a strike', function () {
      game.shots(10, 0)
      game.shots(5,1)
      expect(game.totalscore).toEqual(22)
    })

    it('Knows when the previous shot was NOT a strike', function () {
      game.shots(10, 0)
      game.shots(5, 1)
      game.shots(0, 1)
      expect(game.totalscore).toEqual(23)
    })

    it('Knows when it has strikes in a row', function () {
      game.shots(10, 0)
      game.shots(10, 0)
      game.shots(0, 1)
      expect(game.totalscore).toEqual(22)
    })

    it('Adds with multiples shots', function () {
      game.shots(2, 5)
      game.shots(2, 5)
      expect(game.totalscore).toEqual(14)
    })
  })
})
