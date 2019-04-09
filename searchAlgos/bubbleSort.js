function bubbleSort(arr){
  for (var i = 0; i < arr.length; i++){
    var swap = false
    for (var j = 0; j < arr.length-i-1; j++){
      if (arr[j]>arr[j+1]){
        var temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
        swap = true
      }
      console.log(arr,arr[j],arr[j+1])
    }
    if (swap===false) {break}
  }
  return arr
}

console.log(bubbleSort([2,6,1,2,3,5,4]))