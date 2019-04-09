function binarySearch(arr,target){
  // add whatever parameters you deem necessary - good luck!
  var left = 0
  var right = arr.length - 1
  var current = Math.floor((left+right)/2)
  
  while (left<=right){
    console.log(left,right,current,target)
    if (arr[current]===target){
      return current
    }
    if (arr[current] > target){
        right = current -1
    }
    else if (arr[current] < target){
        left = current + 1
    }
    current = Math.floor((left+right)/2)

  }

  return -1
}

console.log(binarySearch([0,1,1,2,3,4,5,8,18,19,89],2))