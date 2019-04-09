// best case, O(n)
function insertionSort(arr){
  
  for (var i = 1; i < arr.length; i++){
    var current = arr[i]
    var arrCount = 0
    for (var j = i - 1; j >= 0; j--){

      if (arr[j] > current){
        arrCount = arrCount + 1
      }
      if (arr[j] <= current || arrCount === i){
        for (var k = 0; k< arrCount; k++){
          arr[i-k] = arr[i-1-k]
        }
        arr[i-arrCount] = current
        break;
      }
    }
  }

  return arr
}

console.log(insertionSort([3,4,2,5,55,22,1]))
console.log(insertionSort([7,2,7,3,4,2,5,55,22,1]))
console.log(insertionSort([7,2,0,7,3,4,2,5,55,22,1]))

//cleaner

// function insertionSort(arr){
// 	var currentVal;
//     for(var i = 1; i < arr.length; i++){
//         currentVal = arr[i];
//         for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//             arr[j+1] = arr[j]
//         }
//         arr[j+1] = currentVal;
//     }
//     return arr;
// }

// insertionSort([2,1,9,76,4])