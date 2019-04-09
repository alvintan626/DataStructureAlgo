function mergeSort(arr){
  if (arr.length <= 1){ return arr }
  let mid = Math.floor(arr.length/2)
  let left = mergeSort(arr.slice(0,mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left,right)
}

//helper
function merge(arr1,arr2){
  var sort = []
  var i = arr1.length
  var j = arr2.length
  var counti = 0
  var countj = 0
  while (i !== 0 && j !== 0){
    if (arr1[counti] > arr2[countj]){
      sort.push(arr2[countj])
      countj++
      j--
    }
    else {
      sort.push(arr1[counti])
      counti++
      i--
    }
  }
  while (i===0 && j !== 0){
    sort.push(arr2[countj])
    countj++
    j--
  }
  while (j===0 && i !== 0){
    sort.push(arr1[counti])
    counti++
    i--
  }
  return sort
}
console.log(mergeSort([5,4,3,2,1,6]))
// console.log(merge([1,3,99,199,300,300],[1,10,50]))
// console.log(merge([2],[1]))