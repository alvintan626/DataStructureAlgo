function sameFrequency(str1,str2){
  // good luck. Add any arguments you deem necessary.
  
  if (str1.length != str2.length){
      return false
  }
  var str1 = str1.toString()
  var str2 = str2.toString()

  var str1obj = {}
  for (var key of str1){
      str1obj[key] = (str1obj[key] || 0 ) + 1
  }
  for (var lookup of str2){
    if (str1obj[lookup] === undefined ){
      return false
    }
    str1obj[lookup] -= 1
    if (str1obj[lookup] < 0 ){
      return false
    }
  }
  return true;
}
// var start = Date.now()
// console.log(sameFrequency(181,811))
// var end = Date.now()
// console.log((end-start)/1000)
console.log(sameFrequency(281,821))
console.log(sameFrequency(2181,3811))