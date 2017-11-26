describe('bowling', function () {
  var BowlingScore = require('../lib/src/bowling')
  var bowlingscore

  beforeEach(function () {
    bowlingscore = new BowlingScore()
  })

  it('Have frames', function () {
    expect(bowlingscore.frames).toEqual(10)
  })
})
