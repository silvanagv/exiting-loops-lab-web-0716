function breakOut(array, changeValue, stopValue) {
  var n = 0
  while (n < array.length) {
    if (array[n] == stopValue) {
      return array
    }
    else {
    array[n] = changeValue
    n++

  }


  }
  return array
}

function keepGoing(array, changeValue, skipValue) {

  for (var i=0;i<array.length;i++) {
    if (array[i] != skipValue) {
      array[i] = changeValue
    }
  }
  return array
}

function findBy(array, findFn) {

  for (var i = 0; i < array.length; i++) {
    var result = null

    if (findFn(array[i])) {
      return result = array[i]
    }

  }
  return result
}
