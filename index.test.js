const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    utils.trimProperties(input)
    expect(input).toMatchObject({ foo: '  foo ', bar: 'bar ', baz: ' baz' })
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    utils.trimPropertiesMutation(input)
    expect(input).toMatchObject({ foo: 'foo', bar: 'bar', baz: 'baz' })
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toBe(input)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [{ integer: 2 }, { integer: 4 }, { integer: 1 }]
    const expected = 4
    const actual = utils.findLargestInteger(input)
    expect(actual).toBe(expected)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    const expected = 3
    const actual = counter.countDown()
    expect(actual).toBe(expected)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    const firstCall = counter.countDown()
    const secondCall = counter.countDown()
    const expected = firstCall - 1
    expect(secondCall).toBe(expected)
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    for (let i = 0; i < 10; i++) {
      counter.countDown()
    }
    const actual = counter.countDown()
    const expected = 0
    expect(actual).toBe(expected)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    const actual = seasons.next()
    const expected = 'summer'
    expect(actual).toBe(expected)
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next()
    const actual = seasons.next()
    const expected = 'fall'
    expect(actual).toBe(expected)
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next()
    seasons.next()
    const actual = seasons.next()
    const expected = 'winter'
    expect(actual).toBe(expected)
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 3; i++) {
      seasons.next()
    }
    const actual = seasons.next()
    const expected = 'spring'
    expect(actual).toBe(expected)
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    for (let i = 0; i < 4; i++) {
      seasons.next()
    }
    const actual = seasons.next()
    const expected = 'summer'
    expect(actual).toBe(expected)
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 39; i++) {
      seasons.next()
    }
    const actual = seasons.next()
    const expected = 'spring'
    expect(actual).toBe(expected)
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    const expected = focus.odometer + 30
    const actual = focus.drive(30)
    expect(actual).toBe(expected)
  })
  test('[16] driving the car uses gas', () => {
    const initial = focus.tank
    focus.drive(30)
    const final = focus.tank
    expect(final).toBeLessThan(initial)
    expect(final).toBe(19)
  })
  test('[17] refueling allows to keep driving', () => {
    const initial = focus.drive(600)
    const outOfGas = focus.drive(1)
    expect(outOfGas).toBe(initial)
    focus.refuel(1)
    const final = focus.drive(30)
    expect(final).toBe(initial + 30)
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    const actual = focus.refuel(1)
    expect(actual).toBe(600)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    const actual = await utils.isEvenNumberAsync(4)
    expect(actual).toBe(true)
  })
  test('[20] resolves false if passed an odd number', async () => {
    const actual = await utils.isEvenNumberAsync(5)
    expect(actual).toBe(false)
  })
})
