function theBeatlesPlay(muscians, instruments) {
  var result = []
  for (var i = 0; i < muscians.length; i++) {
    result.push(`${muscians[i]} plays ${instruments[i]}`)
  }
  return result
}

function johnLennonFacts(array) {
  var result = []
  var i = 0
  while (i < array.length) {
    result.push(`${array[i]}!!!`)
    i++
  }
  return result

}

function iLoveTheBeatles(n) {
  var result = []
  if (n > 15) {
    return ['I love the Beatles!']
  }
  i = 0
  do {
    result.push("I love the Beatles!")
    n--
  } while (i <= n)
  return result
}
