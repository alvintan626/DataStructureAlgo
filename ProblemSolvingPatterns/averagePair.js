/*given a sorted array of integers and a target average, determine if there is a pair of values in the array where 
avg of the pairs equals the target average.
*/ 
function averagePair(arr,target){
  // add whatever parameters you deem necessary - good luck!
  var arrobj = {}
  for (var key of arr){
    arrobj[key] = key
  }
  for (var i = 0; i < arr.length; i++){
    var num = (target*2) - arr[i]
    if (arrobj[num]){
      return true
    }
  }
  return false
}

console.log(averagePair([1,2,3],2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
console.log(averagePair([-1,0,3,4,5,6],4.1)) // false
console.log(averagePair([],4)) // false