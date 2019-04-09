function countUniqueValues(arr){
  var counter = 0;
  if (arr.length > 0){
    var counter = 1;
  }
  for ( var i = 1; i < arr.length; i++){
    if (arr[i]!==arr[i-1]){
      counter += 1
    }
  }

  return counter
} 

console.log(countUniqueValues([1,2,3,4,5,6,7]))
console.log(countUniqueValues([1,1,2,2,3,4,5,6,6,7]))