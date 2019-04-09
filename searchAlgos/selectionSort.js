//best case O(n^2)
//slowest with random data
function selectionSort(arr){
  for (var i = 0; i < arr.length; i++){
    var min = arr[i]
    var hold = arr[i]
    var temp
    for (var j = i + 1; j < arr.length;j++){
      if (arr[j] < min){
        min = arr[j]
        temp = j
      }
    }
    arr[i] = arr[temp]
    arr[temp] = hold
  }
  return arr
}

console.log(insertionSort([4,1,4,5,3,2,31,45,6]))