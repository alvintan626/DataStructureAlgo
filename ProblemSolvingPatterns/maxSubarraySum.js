function maxSubarraySum(arr,length){
  // add whatever parameters you deem necessary - good luck!
  if (arr.length < length){
    return null;
  }
  
  var temp = 0

  for ( var j = 0; j < length; j++){
    temp += arr[j]
  }
  var max = temp
  for (var i = 0; i < arr.length-length; i++){
    temp = temp - arr[i] + arr[i+j]
    if (temp > max){
      max = temp
    }
  }

  return max
}

console.log(maxSubarraySum([100,200,300,400],2)) //700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20],4)) // 39
console.log(maxSubarraySum([2,3],3)) //null