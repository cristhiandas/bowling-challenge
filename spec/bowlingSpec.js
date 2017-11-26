describe('bowling', function () {
  var BowlingScore = require('../lib/src/bowling')
  var bowlingscore

  beforeEach(function () {
    bowlingscore = new BowlingScore()
  })

  describe('When initializing', function () {
    it('Have frames', function () {
      expect(bowlingscore.frames).toEqual(10)
    })

    it('Have have strike as false', function () {
      expect(bowlingscore.isStrike).toEqual(false)
    })

    it('Have have spare as false', function () {
      expect(bowlingscore.isSpare).toEqual(false)
    })
  })

  describe('When doing a first shot', function () {
    it('returns the score', function () {
      expect(bowlingscore.firstshot(5)).toEqual(5)
    })

    it('Tells when there is a Strike', function () {
      bowlingscore.firstshot(10)
      expect(bowlingscore.isStrike).toEqual(true)
    })
  })

  describe('When doing a second shot', function () {
    it('returns the score', function () {
      expect(bowlingscore.secondshot(4)).toEqual(4)
    })
  })
})
