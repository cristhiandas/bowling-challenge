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
  })

  describe('When entering 2 scores', function () {
    it('Adds the scores to the total', function () {
      game.shots(2, 5)
      expect(game.totalscore).toEqual(7)
    })
    it('Adds with multiples shots', function () {
      game.shots(2, 5)
      game.shots(2, 5)
      expect(game.totalscore).toEqual(14)
    })
  })
})
