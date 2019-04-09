function digitCount(num){
  //counts the number or digits given a number
  var number = num.toString()
  return number.length
}

function mostDigits(arr){
  //figures out how many digits the largest number has
  var max = 0
  for (var i = 0; i<arr.length;i++){
    max = Math.floor(Math.max(max,digitCount(arr[i])))
  }
  return max
}

function digit(num,loc){
  //figures out the values at a num location
  return Math.floor(num/Math.pow(10,loc)) % 10
}


function radixSort(arr){
  // create 10 buckets (from 0 to 9)
  // place each number in corresponding bucket
var maxdigits= mostDigits(arr)

for (var i = 0; i < maxdigits; i++){
  var buckets = [[],[],[],[],[],[],[],[],[],[]]
    for (var j = 0; j < arr.length; j++){
      buckets[digit(arr[j],i)].push(arr[j])
    }
    arr = [].concat(...buckets)
  }
  return arr
}

console.log(radixSort([34,5555,22,31,3133,4,0,411,22,1]))