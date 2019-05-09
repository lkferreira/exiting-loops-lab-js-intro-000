function breakOut(array, changeValue, stopValue) {
  for (var i = 0; i < array.length) {
    if(array[i] == stopValue) {
      break
    } else {
      array[i] = changeValue
    }
  }
}